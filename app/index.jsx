import React, {Component} from "react";
import {render} from 'react-dom';
import {Route, Router, browserHistory , IndexRoute} from "react-router";
// import PropTypes from "prop-types";

import App from "App";
import FindPhotos from "FindPhotos";
import About from "About";
import Example from "Example";

require("./css/style.css");

render(
	<Router history={browserHistory }>
		<Route path="/" component={App}>
			<IndexRoute component={FindPhotos}/>
			<Route path="about" component={About}/>
			<Route path="example" component={Example}/>
		</Route>
	</Router>,
  document.querySelector(".app")
);
