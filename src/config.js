export const defStyle = {
	14: 14,
	15: 15,
	16: 16,
	17: 17
};

export const GACode = {
	// [defStyle[1]]: "UA-163812389-3",
	// [defStyle[2]]: "UA-163812389-4",
	// [defStyle[3]]: "UA-163812389-5",
	// [defStyle[7]]: "G-SJ2YMRP6YN",
	// [defStyle[8]]: "G-KX02GRXQM6",
	// [defStyle[9]]: "G-NPJR2TX1CN",
	// [defStyle[10]]: "G-FKFDHQHZ69",
	[defStyle[14]]: "G-",
	[defStyle[15]]: "G-",
	[defStyle[16]]: "G-",
	[defStyle[17]]: "G-"
};

export const SiteStyle =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_STYLE
		: defStyle[17];

export const defStyleFolder = () => {
	return `desktopStyle${SiteStyle}`;
};

export const defStyleName = {
	desktopStyle14: "desktopStyle14",
	desktopStyle15: "desktopStyle15",
	desktopStyle16: "desktopStyle16",
	desktopStyle17: "desktopStyle17"
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
			apiURL: "http://52.77.157.115:5068",
			imgUrl: "http://52.77.157.115:5068",
			t_and_cURL: "http://52.77.157.115:5068",
			openMobileURL: "http://52.77.157.115:5068",
			openDesktopURL: "http://52.77.157.115:5068"

			// apiURL: "http://www.n88dev.com",
			// imgUrl: "http://www.n88dev.com",
			// t_and_cURL: "http://www.n88dev.com",
			// openMobileURL: "http://www.n88dev.com",
			// openDesktopURL: "http://www.n88dev.com"
	  };
