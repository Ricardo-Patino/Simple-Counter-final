//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

function SimpleCounter(props) {
	return (
		<div className="card text-center bg-dark text-primary">
			<div className="d-flex justify-content-center">
				<div className="card-header">
					<i className="far fa-clock" />
				</div>
				<div className="display-3">{props.num4 % 10}</div>
				<div className="display-3">{props.num3 % 10}</div>
				<div className="display-3">{props.num2 % 10}</div>
				<div className="display-3">{props.num1 % 10}</div>
			</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	num1: PropTypes.number,
	num2: PropTypes.number,
	num3: PropTypes.number,
	num4: PropTypes.number
};

var contador = 0;
setInterval(() => {
	let n1 = Math.floor(contador / 10);
	let n2 = Math.floor(contador / 100);
	let n3 = Math.floor(contador / 1000);
	let n4 = Math.floor(contador / 10000);
	contador++;

	ReactDOM.render(
		<SimpleCounter num1={n1} num2={n2} num3={n3} num4={n4} />,
		document.querySelector("#app")
	);
}, 300);

//render your react application
