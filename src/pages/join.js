import React, { useEffect } from "react";
import { defStyleFolder, defStyleName } from "../config";
import { getUrlParameter } from "../components/common";
import JoinForm from "./join.form";

import logo_1 from "../styles/desktopStyle1/img/logo.png";
import title_1 from "../styles/desktopStyle1/img/title.png";
import btn_1 from "../styles/desktopStyle1/img/btn2.png";

import logo_2 from "../styles/desktopStyle2/img/logo.png";
import title_2 from "../styles/desktopStyle2/img/title.png";
import btn_2 from "../styles/desktopStyle2/img/btn2.png";

import logo_3 from "../styles/desktopStyle3/img/logo.png";
import title_3 from "../styles/desktopStyle3/img/title.png";
import btn_3 from "../styles/desktopStyle3/img/btn2.png";

import logo_4 from "../styles/desktopStyle4/img/logo.png";
import title_4 from "../styles/desktopStyle4/img/title.png";
import btn_4 from "../styles/desktopStyle4/img/btn2.png";

const styleName = defStyleFolder();

const getLogoSrc = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return logo_1;
		case defStyleName.desktopStyle2:
			return logo_2;
		case defStyleName.desktopStyle3:
			return logo_3;
		case defStyleName.desktopStyle4:
			return logo_4;
		default:
			break;
	}
};

const getTitleSrc = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return title_1;
		case defStyleName.desktopStyle2:
			return title_2;
		case defStyleName.desktopStyle3:
			return title_3;
		case defStyleName.desktopStyle4:
			return title_4;
		default:
			break;
	}
};

const getBtnSrc = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return btn_1;
		case defStyleName.desktopStyle2:
			return btn_2;
		case defStyleName.desktopStyle3:
			return btn_3;
		case defStyleName.desktopStyle4:
			return btn_4;
		default:
			break;
	}
};

export default () => {
	useEffect(() => {
		// let errorCode = getUrlParameter("errorCode");
		let message = getUrlParameter("message");
		if (message) {
			alert(message);
		}
	}, []);

	return (
		<div className="wallpaper">
			<div className="logo">
				<img alt="logo" src={getLogoSrc()} />
			</div>
			<div className="title">
				<img src={getTitleSrc()} alt="title" />
			</div>
			<br />
			<div className="infoModule">
				<JoinForm />
			</div>
			<div className="btn-group">
				<button type="submit" form="submitForm">
					<img src={getBtnSrc()} alt="submit_button" />
				</button>
			</div>
		</div>
	);
};
