export const defStyle = {
	style1: "style1",
	style2: "style2",
	style3: "style3",
	style4: "style4"
};

// style1: desktop-version1
// style2: desktop-version2
// style3: mobile-version1
// style4: mobile-version2

export const SiteStyle = defStyle.style4;

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
