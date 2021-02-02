import React, { useEffect, useContext } from "react";
import { i18nContext } from "../components/context";
import { defStyleFolder, defStyleName } from "../config";
import { getUrlParameter } from "../components/common";
import JoinForm from "./join.form";

import logo_desktopStyle1 from "../styles/desktopStyle1/img/logo.png";
import title_desktopStyle1 from "../styles/desktopStyle1/img/title.png";
import btn_desktopStyle1 from "../styles/desktopStyle1/img/btn2.png";
import qrCode_desktopStyle1 from "../styles/desktopStyle1/img/QRcode.png";
import btnDownload_desktopStyle1 from "../styles/desktopStyle1/img/btn1.png";

import logo_desktopStyle2 from "../styles/desktopStyle2/img/logo.png";
import title_desktopStyle2 from "../styles/desktopStyle2/img/title.png";
import btn_desktopStyle2 from "../styles/desktopStyle2/img/btn2.png";
import qrCode_desktopStyle2 from "../styles/desktopStyle2/img/QRcode.png";
import btnDownload_desktopStyle2 from "../styles/desktopStyle2/img/btn1.png";

import logo_desktopStyle3 from "../styles/desktopStyle3/img/logo.png";
import title_desktopStyle3 from "../styles/desktopStyle3/img/title.png";
import btn_desktopStyle3 from "../styles/desktopStyle3/img/btn2.png";

import logo_desktopStyle7 from "../styles/desktopStyle7/img/logo.png";
import title_desktopStyle7 from "../styles/desktopStyle7/img/title.png";
import btn_desktopStyle7 from "../styles/desktopStyle7/img/btn.png";
import qrCode_desktopStyle7 from "../styles/desktopStyle7/img/QRcode.png";
import btnDownload_desktopStyle7 from "../styles/desktopStyle7/img/btn1.png";

import logo_desktopStyle8 from "../styles/desktopStyle8/img/logo.png";
import title_desktopStyle8 from "../styles/desktopStyle8/img/title.png";
import btn_desktopStyle8 from "../styles/desktopStyle8/img/btn.png";

import logo_desktopStyle9 from "../styles/desktopStyle9/img/logo.png";
import title_desktopStyle9 from "../styles/desktopStyle9/img/title.png";
import btn_desktopStyle9 from "../styles/desktopStyle9/img/btn.png";

const styleName = defStyleFolder();

const getLogoSrc = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return logo_desktopStyle1;
		case defStyleName.desktopStyle2:
			return logo_desktopStyle2;
		case defStyleName.desktopStyle3:
			return logo_desktopStyle3;
		case defStyleName.desktopStyle7:
			return logo_desktopStyle7;
		case defStyleName.desktopStyle8:
			return logo_desktopStyle8;
		case defStyleName.desktopStyle9:
			return logo_desktopStyle9;
		default:
			break;
	}
};

const getTitleSrc = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return title_desktopStyle1;
		case defStyleName.desktopStyle2:
			return title_desktopStyle2;
		case defStyleName.desktopStyle3:
			return title_desktopStyle3;
		case defStyleName.desktopStyle7:
			return title_desktopStyle7;
		case defStyleName.desktopStyle8:
			return title_desktopStyle8;
		case defStyleName.desktopStyle9:
			return title_desktopStyle9;
		default:
			break;
	}
};

const getBtnSrc = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return btn_desktopStyle1;
		case defStyleName.desktopStyle2:
			return btn_desktopStyle2;
		case defStyleName.desktopStyle3:
			return btn_desktopStyle3;
		case defStyleName.desktopStyle7:
			return btn_desktopStyle7;
		case defStyleName.desktopStyle8:
			return btn_desktopStyle8;
		case defStyleName.desktopStyle9:
			return btn_desktopStyle9;
		default:
			break;
	}
};

const getQRCode = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return qrCode_desktopStyle1;
		case defStyleName.desktopStyle2:
			return qrCode_desktopStyle2;
		case defStyleName.desktopStyle7:
			return qrCode_desktopStyle7;
		default:
			break;
	}
};

const getDownloadBtn = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return btnDownload_desktopStyle1;
		case defStyleName.desktopStyle2:
			return btnDownload_desktopStyle2;
		case defStyleName.desktopStyle7:
			return btnDownload_desktopStyle7;
		default:
			break;
	}
};

export default () => {
	const { i18n } = useContext(i18nContext);
	useEffect(() => {
		let errorCode = getUrlParameter("errorCode");
		let message = getUrlParameter("message");

		if (message) {
			alert(message);
		}
	}, []);

	let isShowQRCode =
		styleName === defStyleName.desktopStyle1 ||
		styleName === defStyleName.desktopStyle2 ||
		styleName === defStyleName.desktopStyle7;

	const clickDownload = () => {
		window.location.assign(
			"https://mars.fadatsai88.com/v1/App?path=goal123entry_sports_android.apk"
		);
	};

	return (
		<>
			{isShowQRCode ? (
				<div className="wallpaper">
					<div>
						<div className="logo">
							<img alt="logo" src={getLogoSrc()} />
						</div>
						<div className="title">
							<img src={getTitleSrc()} alt="dtitle" />
						</div>
						<div className="infoModule">
							<div>
								<div className="qrtitle">
									{i18n["lbl_Scan_to_Download"]}
								</div>
								<img src={getQRCode()} alt="qrcode" />
								<button onClick={clickDownload}>
									<img
										src={getDownloadBtn()}
										alt="download"
									/>
								</button>
							</div>
							<JoinForm
								buttonSrc={getBtnSrc()}
								styleName={styleName}
							/>
						</div>
					</div>
					{styleName === defStyleName.desktopStyle1 ||
					styleName === defStyleName.desktopStyle2 ? (
						<div className="btn-group">
							<button type="submit" form="submitForm">
								<img src={getBtnSrc()} alt="submit_button" />
							</button>
						</div>
					) : null}
				</div>
			) : (
				<div className="wallpaper">
					<div>
						<div className="logo">
							<img alt="logo" src={getLogoSrc()} />
						</div>
						<div>
							<div className="title">
								<img src={getTitleSrc()} alt="dtitle" />
							</div>
							<JoinForm
								buttonSrc={getBtnSrc()}
								styleName={styleName}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
