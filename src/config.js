export const defStyle = {
	1: 1,
	2: 2,
	3: 3
};

export const GACode = {
	[defStyle[1]]: "UA-163812389-3",
	[defStyle[2]]: "UA-163812389-4",
	[defStyle[3]]: "UA-163812389-5"
};

export const SiteStyle =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_STYLE
		: defStyle[3];

export const defStyleFolder = () => {
	return `desktopStyle${SiteStyle}`;
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
