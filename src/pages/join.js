import React from "react";
import { SiteStyle, defStyle } from "../config";
import logoSrc1 from "../styles/desktopStyle1/img/logo.png";
import logoSrc2 from "../styles/desktopStyle2/img/logo.png";
import logoSrc3 from "../styles/mobileStyle1/img/logo.png";
import logoSrc4 from "../styles/mobileStyle2/img/logo.png";
import buttonSrc1 from "../styles/desktopStyle1/img/button.png";
import buttonSrc2 from "../styles/desktopStyle2/img/button.png";
import buttonSrc3 from "../styles/mobileStyle1/img/button.png";
import buttonSrc4 from "../styles/mobileStyle2/img/button.png";
import Form from "./join.form";

const _style = SiteStyle;

const getLogoSrc = () => {
	switch (_style) {
		case defStyle.desktopStyle1:
			return logoSrc1;
		case defStyle.desktopStyle2:
			return logoSrc2;
		case defStyle.mobileStyle1:
			return logoSrc3;
		case defStyle.mobileStyle2:
			return logoSrc4;
		default:
			break;
	}
};

const getButtonSrc = () => {
	switch (_style) {
		case defStyle.desktopStyle1:
			return buttonSrc1;
		case defStyle.desktopStyle2:
			return buttonSrc2;
		case defStyle.mobileStyle1:
			return buttonSrc3;
		case defStyle.mobileStyle2:
			return buttonSrc4;
		default:
			break;
	}
};

export default () => {
	return (
		<div className="wallpaper">
			<div className={_style === defStyle.mobileStyle2 ? "module" : ""}>
				<div className="logo">
					<img alt="logo" src={getLogoSrc()} />
				</div>
				<div
					className={
						_style === defStyle.mobileStyle1 ? "module" : ""
					}>
					<div className="title">
						<span className="gray">N.Ạ.P ĐẦU</span>
						<span className="yellow">x125%</span>
						<br />
						<span className="fire">LEN DEN 12TR500</span>
					</div>
					<Form buttonSrc={getButtonSrc()} />
				</div>
			</div>
		</div>
	);
};
