export const defStyle = {
	1: 1,
	2: 2,
	3: 3,
	4: 4
};

export const GACode = {
	// [defStyle[1]]: "UA-163812389-3",
	// [defStyle[2]]: "UA-163812389-4",
	// [defStyle[3]]: "UA-163812389-5",
	// [defStyle[7]]: "G-SJ2YMRP6YN",
	// [defStyle[8]]: "G-KX02GRXQM6",
	// [defStyle[9]]: "G-NPJR2TX1CN",
	// [defStyle[10]]: "G-FKFDHQHZ69",
	[defStyle[1]]: "UA-163812389-3",
	[defStyle[2]]: "UA-163812389-4",
	[defStyle[3]]: "UA-163812389-5",
	[defStyle[4]]: "G-SJ2YMRP6YN"
};

export const SiteStyle =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_STYLE
		: defStyle[1];

export const defStyleFolder = () => {
	return `desktopStyle${SiteStyle}`;
};

export const defStyleName = {
	desktopStyle1: "desktopStyle1",
	desktopStyle2: "desktopStyle2",
	desktopStyle3: "desktopStyle3",
	desktopStyle4: "desktopStyle4"
};

export default process.env.NODE_ENV === "production"
	? {
			apiURL: "",
			openMobileURL: "https://m.goal123.com",
			openDesktopURL: "https://www.goal123.com",
			imgUrl: "",
			t_and_cURL: ""
	  }
	: {
			apiURL: "",
			imgUrl: "http://stag.goal123.com",
			t_and_cURL: "http://stag.goal123.com",
			openMobileURL: "http://stag.goal123.com",
			openDesktopURL: "http://stag.goal123.com"
	  };
