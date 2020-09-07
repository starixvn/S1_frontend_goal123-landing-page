export const defStyle = {
	desktopStyle1: "desktopStyle1",
	desktopStyle2: "desktopStyle2",
	mobileStyle1: "mobileStyle1",
	mobileStyle2: "mobileStyle2"
};

export const SiteStyle = defStyle.mobileStyle2;

export default process.env.NODE_ENV === "production"
	? {
			apiURL: "",
			openMobileURL: "https://m.goal123.com",
			openDesktopURL: "https://www.goal123.com",
			imgUrl: "",
			t_and_cURL: ""
	  }
	: {
			apiURL: "http://www.n88dev.com",
			imgUrl: "http://www.n88dev.com",
			t_and_cURL: "http://www.n88dev.com",
			openMobileURL: "http://www.n88dev.com",
			openDesktopURL: "http://www.n88dev.com"
	  };
