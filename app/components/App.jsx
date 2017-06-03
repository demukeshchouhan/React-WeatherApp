import React, {Component} from "react";
import Navigation from "Navigation";

const App = (props) =>{
		return(
			<div>
			<Navigation />
				<div className="container">
					{props.children}
				</div>
			</div>
		);
}

export default App;
