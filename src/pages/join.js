import React, { useEffect } from "react";
import { SiteStyle } from "../config";
import { getUrlParameter } from "../components/common";
import JoinForm from "./join.form";

import logo_desktopStyle1 from "../styles/desktopStyle1_3_5/img/logo.png";
import title_desktopStyle1 from "../styles/desktopStyle1_3_5/img/title.png";
import btn_desktopStyle1 from "../styles/desktopStyle1_3_5/img/btn2.png";

import logo_desktopStyle2 from "../styles/desktopStyle2_4_6/img/logo.png";
import title_desktopStyle2 from "../styles/desktopStyle2_4_6/img/title.png";
import btn_desktopStyle2 from "../styles/desktopStyle2_4_6/img/btn2.png";

const _style = SiteStyle;

const getLogoSrc = () => {
	return _style % 2 === 0 ? logo_desktopStyle2 : logo_desktopStyle1;
};

const getTitleSrc = () => {
	return _style % 2 === 0 ? title_desktopStyle2 : title_desktopStyle1;
};

const getBtnSrc = () => {
	return _style % 2 === 0 ? btn_desktopStyle2 : btn_desktopStyle1;
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
							// className={
							// 	_style === defStyle.desktopStyle3 ||
							// 	_style === defStyle.desktopStyle4
							// 		? "dtitle"
							// 		: ""
							// }
							alt="dtitle"
						/>

						{/* {_style === defStyle.desktopStyle3 ? (
							<img
								src={title_desktopStyle3_mtitle}
								className="mtitle"
								alt="mtitle"
							/>
						) : null} */}
					</div>
					<JoinForm buttonSrc={getBtnSrc()} />
				</div>
			</div>
		</div>
	);
};
