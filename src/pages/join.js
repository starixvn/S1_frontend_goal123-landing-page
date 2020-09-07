import React from "react";
import { SiteStyle, defStyle } from "../config";
import logoSrc1 from "../styles/style1/img/logo.png";
import logoSrc2 from "../styles/style2/img/logo.png";
import logoSrc3 from "../styles/style3/img/logo.png";
import logoSrc4 from "../styles/style4/img/logo.png";
import buttonSrc1 from "../styles/style1/img/button.png";
import buttonSrc2 from "../styles/style2/img/button.png";
import buttonSrc3 from "../styles/style3/img/button.png";
import buttonSrc4 from "../styles/style4/img/button.png";
import Form from "./join.form";

const _style = SiteStyle;

const getLogoSrc = () => {
	switch (_style) {
		case defStyle.style1:
			return logoSrc1;
		case defStyle.style2:
			return logoSrc2;
		case defStyle.style3:
			return logoSrc3;
		case defStyle.style4:
			return logoSrc4;
		default:
			break;
	}
};

const getButtonSrc = () => {
	switch (_style) {
		case defStyle.style1:
			return buttonSrc1;
		case defStyle.style2:
			return buttonSrc2;
		case defStyle.style3:
			return buttonSrc3;
		case defStyle.style4:
			return buttonSrc4;
		default:
			break;
	}
};

export default () => {
	return (
		<div className="wallpaper">
			<div className={_style === defStyle.style4 ? "module" : ""}>
				<div className="logo">
					<img alt="logo" src={getLogoSrc()} />
				</div>
				<div className={_style === defStyle.style3 ? "module" : ""}>
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
