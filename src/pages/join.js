import React, { useEffect } from "react";
// import { i18nContext } from "../components/context";
import { defStyleFolder, defStyleName } from "../config";
import { getUrlParameter } from "../components/common";
import JoinForm from "./join.form";

import logo_1 from "../styles/desktopStyle1/img/logo.png";
import title_1 from "../styles/desktopStyle1/img/title.png";
import btn_1 from "../styles/desktopStyle1/img/btn2.png";
import qrCode_1 from "../styles/desktopStyle1/img/QRcode.png";
import btnDownload_1 from "../styles/desktopStyle1/img/btn1.png";
import img_QRTitle_1 from "../styles/desktopStyle1/img/qr_title.png";

import logo_2 from "../styles/desktopStyle2/img/logo.png";
import title_2 from "../styles/desktopStyle2/img/title.png";
import btn_2 from "../styles/desktopStyle2/img/btn2.png";
import qrCode_2 from "../styles/desktopStyle2/img/QRcode.png";
import btnDownload_2 from "../styles/desktopStyle2/img/btn1.png";
import img_QRTitle_2 from "../styles/desktopStyle2/img/qr_title.png";

import logo_3 from "../styles/desktopStyle3/img/logo.png";
import title_3 from "../styles/desktopStyle3/img/title.png";
import btn_3 from "../styles/desktopStyle3/img/btn2.png";
import qrCode_3 from "../styles/desktopStyle3/img/qrcode.png";
import btnDownload_3 from "../styles/desktopStyle3/img/btn1.png";

import logo_4 from "../styles/desktopStyle4/img/logo.png";
import title_4 from "../styles/desktopStyle4/img/title.png";
import btn_4 from "../styles/desktopStyle4/img/btn2.png";
import qrCode_4 from "../styles/desktopStyle4/img/qrcode.png";
import btnDownload_4 from "../styles/desktopStyle4/img/btn1.png";

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

const getQRCode = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return qrCode_1;
		case defStyleName.desktopStyle2:
			return qrCode_2;
		case defStyleName.desktopStyle3:
			return qrCode_3;
		case defStyleName.desktopStyle4:
			return qrCode_4;
		default:
			break;
	}
};

const getImgQRTitle = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return img_QRTitle_1;
		case defStyleName.desktopStyle2:
			return img_QRTitle_2;
		default:
			break;
	}
};

const getDownloadBtn = () => {
	switch (styleName) {
		case defStyleName.desktopStyle1:
			return btnDownload_1;
		case defStyleName.desktopStyle2:
			return btnDownload_2;
		case defStyleName.desktopStyle3:
			return btnDownload_3;
		case defStyleName.desktopStyle4:
			return btnDownload_4;
		default:
			break;
	}
};

export default () => {
	// const { i18n } = useContext(i18nContext);
	useEffect(() => {
		// let errorCode = getUrlParameter("errorCode");
		let message = getUrlParameter("message");
		if (message) {
			alert(message);
		}
	}, []);

	const clickDownload = () => {
		window.open(
			"https://mars.fadatsai88.com/v1/App?path=goal123entry_sports_android.apk"
		);
	};

	return (
		<div className="wallpaper">
			<div className="logo">
				<img alt="logo" src={getLogoSrc()} />
			</div>
			<div className="title">
				<img src={getTitleSrc()} alt="title" />
			</div>
			<div className="infoModule">
				<div>
					<div className="qrtitle">
						{styleName === defStyleName.desktopStyle1 ||
						styleName === defStyleName.desktopStyle2 ? (
							<img src={getImgQRTitle()} alt="qrtitle" />
						) : null}
					</div>
					<img src={getQRCode()} alt="qrcode" />
					<button onClick={clickDownload}>
						<img src={getDownloadBtn()} alt="download_button" />
					</button>
				</div>
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
