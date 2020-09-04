import React from "react";
import { SiteStyle, defStyle } from "../config";
import logoSrc1 from "../styles/style1/img/logo.png";
import logoSrc2 from "../styles/style2/img/logo.png";
import buttonSrc1 from "../styles/style1/img/button.png";
import buttonSrc2 from "../styles/style2/img/button.png";
import Form from "./join.form";

const _style = SiteStyle;

const getLogoSrc = () => {
	if (_style === defStyle.style1) {
		return logoSrc1;
	} else {
		return logoSrc2;
	}
};

const getButtonSrc = () => {
	if (_style === defStyle.style1) {
		return buttonSrc1;
	} else {
		return buttonSrc2;
	}
};

export default () => {
	return (
		<div className="wallpaper">
			<div className="logo">
				<img alt="logo" src={getLogoSrc()} />
			</div>
			<div className="title">
				<span className="gray">N.Ạ.P ĐẦU</span>
				<span className="yellow">x125%</span>
				<br />
				<span className="fire">LEN DEN 12TR500</span>
			</div>
			<Form buttonSrc={getButtonSrc()} />
		</div>
	);
};
