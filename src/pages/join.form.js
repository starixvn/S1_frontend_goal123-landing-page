import React, { useContext, useState, useEffect, useRef } from "react";
import { i18nContext } from "../components/context";
import {
	api_site_Register,
	api_site_ExistsUserName
} from "../service/api/site";
import { getUrlParameter, readCookie } from "../components/common";
import Inputbox from "../components/inputbox";

const initValue = {
	username: "",
	password: ""
};

const initTip = {
	username: { checked: null, msg: "" },
	password: { checked: null, msg: "" }
};

const defaultLangId = "vn";

const passwordCheck = val => {
	let checked = false;
	let msg = "";

	const regx = /^[a-zA-Z0-9@$*!%#?&]*$/;
	if (val === "") {
		checked = false;
		msg = "msg_PasswordReq";
	} else if (val != null) {
		if (val.length < 6 || val.length > 18) {
			checked = false;
			msg = "msg_PasswordLength";
		} else if (!regx.test(val)) {
			checked = false;
			msg = "msg_PasswordVaildate";
		} else {
			checked = true;
		}
	}
	return { checked, msg };
};

export default props => {
	const { i18n } = useContext(i18nContext);
	const [userValue, setUserValue] = useState(initValue);
	const [tip, setTip] = useState(initTip);
	const isMountedRef = useRef(null);

	useEffect(() => {
		isMountedRef.current = true;
		return () => (isMountedRef.current = false);
	});

	const EditField = (col, e) => {
		let val = e.target.value;
		val = val.replace(/[\W]/g, "");

		setUserValue(prev => ({
			...prev,
			[col]: val
		}));
	};

	const checkValue = (col, e) => {
		let val = e.target.value;
		let checked = true;
		let msg = "";

		if (col === "username") {
			let result = usernameCheck(val);
			checked = result.checked;
			msg = result.msg;
		} else if (col === "password") {
			let result = passwordCheck(val);
			checked = result.checked;
			msg = result.msg;
		}

		setTip(prev => {
			return {
				...prev,
				[col]: {
					checked: checked,
					msg: i18n[msg]
				}
			};
		});
	};

	const usernameCheck = val => {
		let checked = false;
		let msg = "";

		if (val === "") {
			checked = false;
			msg = "msg_UsernameReq";
		} else if (val !== "") {
			if (val.length < 6 || val.length > 18) {
				checked = false;
				msg = "msg_UsernameLength";
			} else {
				checked = true;
			}
		}

		if (checked === true) {
			api_site_ExistsUserName({ UserName: val }).then(
				res => {
					if (isMountedRef.current) {
						if (res.data.errorCode === 0) {
							if (res.data.data === true) {
								setTip(prev => {
									return {
										...prev,
										username: {
											checked: false,
											msg:
												i18n["msg_UsernameNotAvailable"]
										}
									};
								});
							} else {
								setTip(prev => {
									return {
										...prev,
										username: {
											checked: true,
											msg: ""
										}
									};
								});
							}
						}
					}
				},
				err => {
					if (isMountedRef.current) {
						alert(i18n["msg_ApiServerError"]);
					}
				}
			);
		}

		return { checked, msg };
	};

	const checkAll = () => {
		let _usernameCheck = usernameCheck(userValue.username);
		let _passwordCheck = passwordCheck(userValue.password);

		let checked = _usernameCheck.checked && _passwordCheck.checked;

		if (!checked) {
			setTip(prev => {
				return {
					...prev,
					username: {
						checked: _usernameCheck.checked,
						msg: i18n[_usernameCheck.msg]
					},
					password: {
						checked: _passwordCheck.checked,
						msg: i18n[_passwordCheck.msg]
					}
				};
			});
		}
		return checked;
	};

	const clickSubmit = e => {
		e.preventDefault();
		let checked = checkAll();
		if (checked) {
			let regData = {
				UserName: userValue.username,
				Userpwd: userValue.password,
				// Email: userValue.email,
				CurrencyId: 51,
				UserLang: defaultLangId
			};

			regData["RefId"] = getUrlParameter("RefId") || readCookie("RefId");
			regData["AffId"] = getUrlParameter("AffId") || readCookie("AffId");
			regData["Aff"] = getUrlParameter("Aff") || readCookie("Aff");
			api_site_Register(regData).then(
				res => {
					if (isMountedRef.current) {
						const errorCode = res.data.errorCode;
						const message = res.data.message;
						if (errorCode === 0) {
						} else if (
							errorCode === -2 ||
							errorCode === -5 ||
							errorCode === -19
						) {
							setTip(prev => {
								return {
									...prev,
									username: {
										checked: false,
										msg: message
									}
								};
							});
						} else if (errorCode === -3) {
							setTip(prev => {
								return {
									...prev,
									password: {
										checked: false,
										msg: message
									}
								};
							});
						} else {
							alert(i18n[message]);
						}
					}
				},
				err => {
					if (isMountedRef.current) {
						alert(i18n["msg_ApiServerError"]);
					}
				}
			);
		}
	};

	return (
		<>
			<form className="info" onSubmit={clickSubmit}>
				<Inputbox
					displayText="Tên đăng nhập"
					value={userValue.username}
					tip={tip.username.msg}
					checked={tip.username.checked}
					onChange={EditField.bind(null, "username")}
					onBlur={checkValue.bind(null, "username")}
					checkIcon="icon icon1"
				/>
				<Inputbox
					displayText="Mật khẩu"
					value={userValue.password}
					tip={tip.password.msg}
					checked={tip.password.checked}
					onChange={EditField.bind(null, "password")}
					onBlur={checkValue.bind(null, "password")}
					checkIcon="icon icon2"
				/>
				<button>
					<img alt="button_img" src={props.buttonSrc} />
				</button>
			</form>
		</>
	);
};
