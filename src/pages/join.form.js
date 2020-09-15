import React, { useContext, useState, useEffect, useRef } from "react";
import { i18nContext } from "../components/context";
import { api_site_ExistsUserName } from "../service/api/site";
import { MobileAndTabletCheck } from "../components/common";
import Inputbox from "../components/inputbox";
import config from "../config";
import { SiteStyle } from "../config";

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

	const nameRepeatCheck = async val => {
		try {
			const res = await api_site_ExistsUserName({ UserName: val });
			if (isMountedRef.current) {
				if (res.data.errorCode === 0) {
					return !res.data.data;
				}
			}
		} catch (error) {
			if (isMountedRef.current && error.response) {
				alert(i18n["msg_ApiServerError"]);
			}
		}
	};

	const usernameCheck = async val => {
		let checked = true;
		let msg = "";
		if (val === "") {
			checked = false;
			msg = "msg_UsernameReq";
		} else if (val !== "") {
			if (val.length < 6 || val.length > 18) {
				checked = false;
				msg = "msg_UsernameLength";
			} else if ((await nameRepeatCheck(val)) === false) {
				checked = false;
				msg = "msg_UsernameNotAvailable";
			}
		}
		return { checked, msg };
	};

	const checkAll = async () => {
		let _usernameCheck = await usernameCheck(userValue.username);
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

	const clickSubmit = async e => {
		e.preventDefault();
		const result = await checkAll();
		if (result) {
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
					beforeIcon={SiteStyle === "desktopStyle4" ? "icon1" : null}
					checkIcon={
						SiteStyle === "desktopStyle3" ||
						SiteStyle === "desktopStyle4"
							? null
							: "icon icon1"
					}
				/>
				<Inputbox
					displayText="Mật khẩu"
					value={userValue.password}
					tip={tip.password.msg}
					checked={tip.password.checked}
					onChange={EditField.bind(null, "password")}
					onBlur={checkValue.bind(null, "password")}
					beforeIcon={SiteStyle === "desktopStyle4" ? "icon2" : null}
					checkIcon={
						SiteStyle === "desktopStyle3" ||
						SiteStyle === "desktopStyle4"
							? null
							: "icon icon2"
					}
					// eyeIcon={SiteStyle === "desktopStyle4"}
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
