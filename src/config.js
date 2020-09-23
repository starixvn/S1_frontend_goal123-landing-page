export const defStyle = {
	desktopStyle1: "desktopStyle1",
	desktopStyle2: "desktopStyle2",
	desktopStyle3: "desktopStyle3",
	desktopStyle4: "desktopStyle4",
	desktopStyle5: "desktopStyle5",
	desktopStyle6: "desktopStyle6",
	mobileStyle1: "mobileStyle1",
	mobileStyle2: "mobileStyle2"
};

export const GACode = {
	[defStyle.desktopStyle1]: "UA-163812389-3",
	[defStyle.desktopStyle2]: "UA-163812389-4",
	[defStyle.desktopStyle3]: "UA-163812389-5",
	[defStyle.desktopStyle4]: "UA-163812389-6",
	[defStyle.desktopStyle5]: "UA-163812389-8",
	[defStyle.desktopStyle6]: "UA-163812389-9",
	[defStyle.mobileStyle1]: "UA-163812389-3",
	[defStyle.mobileStyle2]: "UA-163812389-4"
};

export const SiteStyle = defStyle.desktopStyle1;

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
