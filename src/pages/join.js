import React, { useEffect } from "react";
import { defStyleFolder } from "../config";
import { getUrlParameter } from "../components/common";
import JoinForm from "./join.form";

import logo_desktopStyle1 from "../styles/desktopStyle1/img/logo.png";
import title_desktopStyle1 from "../styles/desktopStyle1/img/title.png";
import btn_desktopStyle1 from "../styles/desktopStyle1/img/btn2.png";

import logo_desktopStyle2 from "../styles/desktopStyle2/img/logo.png";
import title_desktopStyle2 from "../styles/desktopStyle2/img/title.png";
import btn_desktopStyle2 from "../styles/desktopStyle2/img/btn2.png";

import logo_desktopStyle3 from "../styles/desktopStyle3/img/logo.png";
import title_desktopStyle3 from "../styles/desktopStyle3/img/title.png";
import btn_desktopStyle3 from "../styles/desktopStyle3/img/btn2.png";

const _style = defStyleFolder();

const getLogoSrc = () => {
	switch (_style) {
		case "desktopStyle1":
			return logo_desktopStyle1;
		case "desktopStyle2":
			return logo_desktopStyle2;
		case "desktopStyle3":
			return logo_desktopStyle3;
		default:
			break;
	}
};

const getTitleSrc = () => {
	switch (_style) {
		case "desktopStyle1":
			return title_desktopStyle1;
		case "desktopStyle2":
			return title_desktopStyle2;
		case "desktopStyle3":
			return title_desktopStyle3;
		default:
			break;
	}
};

const getBtnSrc = () => {
	switch (_style) {
		case "desktopStyle1":
			return btn_desktopStyle1;
		case "desktopStyle2":
			return btn_desktopStyle2;
		case "desktopStyle3":
			return btn_desktopStyle3;
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
			<div>
				<div className="logo">
					<img alt="logo" src={getLogoSrc()} />
				</div>
				<div>
					<div className="title">
						<img
							src={getTitleSrc()}
							alt="dtitle"
						/>
					</div>
					<JoinForm buttonSrc={getBtnSrc()} />
				</div>
			</div>
		</div>
	);
};
