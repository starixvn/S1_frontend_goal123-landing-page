import React, { useEffect } from "react";
import { SiteStyle, defStyle } from "../config";
import { getUrlParameter } from "../components/common";
import Form from "./join.form";

import logo_desktopStyle1 from "../styles/desktopStyle1/img/logo.png";
import logo_desktopStyle2 from "../styles/desktopStyle2/img/logo.png";
import logo_desktopStyle3 from "../styles/desktopStyle3/img/logo.png";
import logo_desktopStyle4 from "../styles/desktopStyle4/img/logo.png";
import logo_mobileStyle1 from "../styles/mobileStyle1/img/logo.png";
import logo_mobileStyle2 from "../styles/mobileStyle2/img/logo.png";

import title_desktopStyle1 from "../styles/desktopStyle1/img/title.png";
import title_desktopStyle2 from "../styles/desktopStyle2/img/title.png";
import title_desktopStyle3 from "../styles/desktopStyle3/img/title.png";
import title_desktopStyle4 from "../styles/desktopStyle4/img/title.png";
import title_mobileStyle1 from "../styles/mobileStyle1/img/title.png";
import title_mobileStyle2 from "../styles/mobileStyle2/img/title.png";

import button_desktopStyle1 from "../styles/desktopStyle1/img/button.png";
import button_desktopStyle2 from "../styles/desktopStyle2/img/button.png";
import button_desktopStyle3 from "../styles/desktopStyle3/img/button.png";
import button_desktopStyle4 from "../styles/desktopStyle4/img/button.png";
import button_mobileStyle1 from "../styles/mobileStyle1/img/button.png";
import button_mobileStyle2 from "../styles/mobileStyle2/img/button.png";

import title_desktopStyle3_mtitle from "../styles/desktopStyle3/img/mtitle.png";

const _style = SiteStyle;

const getLogoSrc = () => {
	switch (_style) {
		case defStyle.desktopStyle1:
			return logo_desktopStyle1;
		case defStyle.desktopStyle2:
			return logo_desktopStyle2;
		case defStyle.desktopStyle3:
			return logo_desktopStyle3;
		case defStyle.desktopStyle4:
			return logo_desktopStyle4;
		case defStyle.mobileStyle1:
			return logo_mobileStyle1;
		case defStyle.mobileStyle2:
			return logo_mobileStyle2;
		default:
			break;
	}
};

const getTitleSrc = () => {
	switch (_style) {
		case defStyle.desktopStyle1:
			return title_desktopStyle1;
		case defStyle.desktopStyle2:
			return title_desktopStyle2;
		case defStyle.desktopStyle3:
			return title_desktopStyle3;
		case defStyle.desktopStyle4:
			return title_desktopStyle4;
		case defStyle.mobileStyle1:
			return title_mobileStyle1;
		case defStyle.mobileStyle2:
			return title_mobileStyle2;
		default:
			break;
	}
};

const getButtonSrc = () => {
	switch (_style) {
		case defStyle.desktopStyle1:
			return button_desktopStyle1;
		case defStyle.desktopStyle2:
			return button_desktopStyle2;
		case defStyle.desktopStyle3:
			return button_desktopStyle3;
		case defStyle.desktopStyle4:
			return button_desktopStyle4;
		case defStyle.mobileStyle1:
			return button_mobileStyle1;
		case defStyle.mobileStyle2:
			return button_mobileStyle2;
		default:
			break;
	}
};

export default () => {
	useEffect(() => {
		let errorCode = getUrlParameter("errorCode");
		let message = getUrlParameter("message");

		if (message) {
			alert(message);
		}
	}, []);

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
						<img
							src={getTitleSrc()}
							className={
								_style === defStyle.desktopStyle3 ||
								_style === defStyle.desktopStyle4
									? "dtitle"
									: ""
							}
							alt="dtitle"
						/>

						{_style === defStyle.desktopStyle3 ? (
							<img
								src={title_desktopStyle3_mtitle}
								className="mtitle"
								alt="mtitle"
							/>
						) : null}
					</div>
					<Form buttonSrc={getButtonSrc()} />
				</div>
			</div>
		</div>
	);
};
