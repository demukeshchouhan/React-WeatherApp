import React, {Component} from "react";

const WeatherMessage = ({temp, location}) =>{
	// let {temp, location} = props;
		return(
			<div>
				<h4>It's {temp} in {location}</h4>
			</div>
		);
}


export default WeatherMessage;
