import React, {Component} from "react";
import {form, FormGroup, FormControl, Button} from "react-bootstrap";
export default class WeatherForm extends Component{
	constructor(props){
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	inputStyle(){
		return {
			height : "50px"
		}
	}
	onFormSubmit(e) {
			e.preventDefault();
			let location =  this.refs.location.value;
			if(location.length > 0){
				this.refs.location.value = '';
				this.props.onSearch(location);
			}
	}
	render(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<FormGroup>
									<input type="text"
												className="form-control"
												placeholder="Enter city name"
												style={this.inputStyle()}
												ref="location"/>
					</FormGroup>
					<FormGroup>
					<Button
						bsStyle="info"
						type="submit"
						bsSize="large" block>Get Weather</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}
