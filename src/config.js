const defStyleFolderList = {
	desktopStyle1_3_5: "desktopStyle1_3_5",
	desktopStyle2_4_6: "desktopStyle2_4_6"
};

export const defStyleFolder = style => {
	return style % 2 === 0
		? defStyleFolderList.desktopStyle2_4_6
		: defStyleFolderList.desktopStyle1_3_5;
};

export const defStyle = {
	1: 1, //style5
	2: 2, //style6
	3: 3, //style5
	4: 4, //style6
	5: 5,
	6: 6
};

export const GACode = {
	[defStyle[1]]: "UA-163812389-3",
	[defStyle[2]]: "UA-163812389-4",
	[defStyle[3]]: "UA-163812389-5",
	[defStyle[4]]: "UA-163812389-6",
	[defStyle[5]]: "UA-163812389-8",
	[defStyle[6]]: "UA-163812389-9"
};

export const SiteStyle = defStyle[6];

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
