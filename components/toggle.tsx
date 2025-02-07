import React from "react";

type ToggleSwitchProps = {
	checked: boolean;
	onChange: () => void;
};

export default function Toggle({ checked, onChange }: ToggleSwitchProps) {
	return (
		<div className="toggle-switch">
			<input
				className="toggle-input"
				id="toggle"
				type="checkbox"
				checked={checked}
				onChange={onChange}
			/>
			<label className="toggle-label" htmlFor="toggle"></label>
			<style jsx>{`
				.toggle-switch {
					display: inline-block;
					position: relative;
					width: 60px;
					height: 28px;
				}
				.toggle-input {
					display: none;
				}
				.toggle-label {
					position: absolute;
					top: 0;
					left: 0;
					width: 60px;
					height: 28px;
					background-color: #ccc;
					border-radius: 34px;
					cursor: pointer;
					transition: background-color 0.3s;
				}
				.toggle-label:before {
					content: "";
					position: absolute;
					top: 2px;
					left: 2px;
					width: 30px;
					height: 26px;
					background-color: #fff;
					border-radius: 50%;
					transition: transform 0.3s;
				}
				.toggle-input:checked + .toggle-label {
					background-color: #4fbf26;
				}
				.toggle-input:checked + .toggle-label:before {
					transform: translateX(26px);
				}
			`}</style>
		</div>
	);
}
