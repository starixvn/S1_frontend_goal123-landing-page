import config from "../config";

export default langId => {
	return {
		terms: `${config.t_and_cURL}/SiteSkin/Goal123/Static/${langId}/TermsConditions.html`,
		rule: `${config.t_and_cURL}/SiteSkin/Goal123/Static/${langId}/RulesandRegulations.html`
	};
};
