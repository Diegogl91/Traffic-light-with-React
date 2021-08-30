import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");

	return (
		<div className="contenedor">
			<div id="poste"></div>
			<div className="traffic-light">
				<div
					id="red"
					className={"red" + (color === "red" ? " glow" : "")}
					onClick={() => setColor("red")}></div>
				<div
					id="yellow"
					onClick={() => setColor("yellow")}
					className={
						"yellow" + (color === "yellow" ? " glow" : "")
					}></div>
				<div
					id="green"
					onClick={() => setColor("green")}
					className={
						"green" + (color === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
