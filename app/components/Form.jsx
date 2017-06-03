import React, {Component} from "react";
import {form, FormGroup, FormControl, ControlLabel, Button, Col} from "react-bootstrap";

export default class Form extends Component{
		constructor(props){
			super(props);
			this.handleFormSubmit = this.handleFormSubmit.bind(this);
		}
		handleFormSubmit(e){
			e.preventDefault();
			this.setState({
				photoKeywords: this.refs.searchPhoto.value
			})
			var searchVal = this.refs.searchPhoto.value;
			if(searchVal.length > 0){
				this.props.onSearch(searchVal);
			}
		}

		render(){
			let inputStyle = {
				height : "50px"
			};
			return(
				<form onSubmit={this.handleFormSubmit}>
					<FormGroup>
					<input
							style={inputStyle}
							className="form-control"
							type="text"
							placeholder="Search for Photos."
							ref="searchPhoto" />
					</FormGroup>
					<FormGroup>
					<Button type="submit"
									bsStyle="info"
									bsSize="large" block>Search</Button>
					</FormGroup>
				</form>
			);
		}
}
