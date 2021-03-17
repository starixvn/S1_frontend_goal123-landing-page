import React, { useEffect, useContext } from "react";
import { i18nContext } from "../components/context";
import { defStyleFolder, defStyleName } from "../config";
import { getUrlParameter } from "../components/common";
import JoinForm from "./join.form";

import logo_14 from "../styles/desktopStyle14/img/logo.png";
import title_14 from "../styles/desktopStyle14/img/title.png";
import btn_14 from "../styles/desktopStyle14/img/btn2.png";
import qrCode_14 from "../styles/desktopStyle14/img/QRcode.png";
import btnDownload_14 from "../styles/desktopStyle14/img/btn1.png";
import img_QRTitle_14 from "../styles/desktopStyle14/img/qr_title.png";

import logo_15 from "../styles/desktopStyle15/img/logo.png";
import title_15 from "../styles/desktopStyle15/img/title.png";
import btn_15 from "../styles/desktopStyle15/img/btn2.png";
import qrCode_15 from "../styles/desktopStyle15/img/QRcode.png";
import btnDownload_15 from "../styles/desktopStyle15/img/btn1.png";
import img_QRTitle_15 from "../styles/desktopStyle15/img/qr_title.png";

import logo_16 from "../styles/desktopStyle16/img/logo.png";
import title_16 from "../styles/desktopStyle16/img/title.png";
import btn_16 from "../styles/desktopStyle16/img/btn2.png";
import qrCode_16 from "../styles/desktopStyle16/img/qrcode.png";
import btnDownload_16 from "../styles/desktopStyle16/img/btn1.png";

import logo_17 from "../styles/desktopStyle17/img/logo.png";
import title_17 from "../styles/desktopStyle17/img/title.png";
import btn_17 from "../styles/desktopStyle17/img/btn2.png";
import qrCode_17 from "../styles/desktopStyle17/img/qrcode.png";
import btnDownload_17 from "../styles/desktopStyle17/img/btn1.png";

const styleName = defStyleFolder();

const getLogoSrc = () => {
	switch (styleName) {
		case defStyleName.desktopStyle14:
			return logo_14;
		case defStyleName.desktopStyle15:
			return logo_15;
		case defStyleName.desktopStyle16:
			return logo_16;
		case defStyleName.desktopStyle17:
			return logo_17;
		default:
			break;
	}
};

const getTitleSrc = () => {
	switch (styleName) {
		case defStyleName.desktopStyle14:
			return title_14;
		case defStyleName.desktopStyle15:
			return title_15;
		case defStyleName.desktopStyle16:
			return title_16;
		case defStyleName.desktopStyle17:
			return title_17;
		default:
			break;
	}
};

const getBtnSrc = () => {
	switch (styleName) {
		case defStyleName.desktopStyle14:
			return btn_14;
		case defStyleName.desktopStyle15:
			return btn_15;
		case defStyleName.desktopStyle16:
			return btn_16;
		case defStyleName.desktopStyle17:
			return btn_17;
		default:
			break;
	}
};

const getQRCode = () => {
	switch (styleName) {
		case defStyleName.desktopStyle14:
			return qrCode_14;
		case defStyleName.desktopStyle15:
			return qrCode_15;
		case defStyleName.desktopStyle16:
			return qrCode_16;
		case defStyleName.desktopStyle17:
			return qrCode_17;
		default:
			break;
	}
};

const getImgQRTitle = () => {
	switch (styleName) {
		case defStyleName.desktopStyle14:
			return img_QRTitle_14;
		case defStyleName.desktopStyle15:
			return img_QRTitle_15;
		default:
			break;
	}
};

const getDownloadBtn = () => {
	switch (styleName) {
		case defStyleName.desktopStyle14:
			return btnDownload_14;
		case defStyleName.desktopStyle15:
			return btnDownload_15;
		case defStyleName.desktopStyle16:
			return btnDownload_16;
		case defStyleName.desktopStyle17:
			return btnDownload_17;
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

	const clickDownload = () => {
		window.open(
			"https://mars.fadatsai88.com/v1/App?path=goal123entry_sports_android.apk"
		);
	};

	return (
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
							{styleName === defStyleName.desktopStyle14 ||
							styleName === defStyleName.desktopStyle15 ? (
								<img src={getImgQRTitle()} alt="dtitle" />
							) : null}
						</div>
						<img src={getQRCode()} alt="qrcode" />
						<button onClick={clickDownload}>
							<img src={getDownloadBtn()} alt="download" />
						</button>
					</div>
					<JoinForm buttonSrc={getBtnSrc()} styleName={styleName} />
				</div>
			</div>

			<div className="btn-group">
				<button type="submit" form="submitForm">
					<img src={getBtnSrc()} alt="submit_button" />
				</button>
			</div>
		</div>
	);
};
