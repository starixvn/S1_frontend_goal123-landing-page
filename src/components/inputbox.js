import React from "react";

export default props => {
	return (
		<>
			{props.beforeIcon ? (
				<i className={` icon ${props.beforeIcon}`}></i>
			) : null}
			<input
				onChange={props.onChange}
				onBlur={props.onBlur}
				placeholder={props.displayText}
				value={
					props.value === null || props.value === undefined
						? ""
						: props.value
				}
			/>
			{props.checkIcon ? (
				<i className={` icon ${props.checkIcon}`}></i>
			) : null}
			{props.eyeIcon ? <i className={`eye`}></i> : null}
			{props.tip ? <div className="tip active">{props.tip}</div> : null}
		</>
	);
};
