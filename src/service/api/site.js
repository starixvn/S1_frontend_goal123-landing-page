import { siteRequest } from "./base";

export const api_site_Register = data => siteRequest.post(`/Register/`, data);

export const api_site_ExistsUserName = ({ UserName }) =>
	siteRequest.post(`/ExistsUserName/vn`, { UserName: UserName });
