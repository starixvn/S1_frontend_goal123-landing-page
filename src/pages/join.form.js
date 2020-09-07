import React, { useContext, useState, useEffect, useRef } from "react";
import { i18nContext } from "../components/context";
import {
	// api_site_Register,
	api_site_ExistsUserName
} from "../service/api/site";
import {
	// getUrlParameter,
	// readCookie,
	MobileAndTabletCheck
} from "../components/common";
import Inputbox from "../components/inputbox";
import config from "../config";

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
	const xxxRef = useRef(null);

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
			xxxRef.current.submit();
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

			<form
				ref={xxxRef}
				action={`${
					MobileAndTabletCheck()
						? config.openMobileURL
						: config.openDesktopURL
				}/${defaultLangId}/Extra/Signup`}
				method="post">
				<input
					type="hidden"
					name="UserName"
					value={userValue.username}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="Userpwd"
					value={userValue.password}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="CurrencyId"
					value={51}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="SignupUrl"
					value={window.location.host}
					onChange={() => {}}
				/>
				<input
					type="hidden"
					name="UserLang"
					value={defaultLangId}
					onChange={() => {}}
				/>
			</form>
		</>
	);
};
