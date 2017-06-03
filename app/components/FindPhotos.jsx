import React,{Component} from "react";
import {form, FormGroup, FormControl, ControlLabel, Button, Col} from "react-bootstrap";

import ListPhoto from "ListPhoto";
import fetchPhoto from "../api/FetchAPI";


class FindPhotos extends Component {
	constructor(props){
		super(props);
		this.handleData = this.handleData.bind(this);
	}
	handleData(e){
		e.preventDefault();
		fetchPhoto("flower")
		.then(function(response){
			console.log(response);
		},function(error){
			console.log(error);
		})

	}
	render(){
		let inputStyle = {
			height : "50px"
		};
		return(
			<div>
			<Col mdOffset={3} md={6}>
				<form onSubmit={this.handleData}>
					<FormGroup>
						<FormControl
								style={inputStyle}
								type="text"
								placeholder="Search for Photos."
								ref="searchPhoto"
									/>
					</FormGroup>
					<FormGroup>
					<Button type="submit"
									bsStyle="info"
									bsSize="large" block>Search</Button>
					</FormGroup>
				</form>
			</Col>

			<Col sm={12}>
				<ListPhoto />
			</Col>
			</div>
		);
	}
}

module.exports = FindPhotos;
