import React,{Component} from "react";
import {Col} from "react-bootstrap";

import ListPhoto from "ListPhoto";
import fetchPhoto from "../api/FetchAPI";
import Form from "Form";


class FindPhotos extends Component {
	constructor(props){
		super(props);
		this.state = {
				data : []
		};
		this.handleData = this.handleData.bind(this);
	}
	handleData(photoKeywords){
		fetchPhoto(photoKeywords)
		.then((response)=>{
			if(response){
				this.setState({
					data: response
				})
			}
		},(error)=>{
			console.log(error);
		})

	}
	render(){

		return(
			<div>
			<Col mdOffset={3} md={6}>
				<Form onSearch={this.handleData}/>
			</Col>

			<Col sm={12}>
				<ListPhoto listData={this.state.data} />
			</Col>
			</div>
		);
	}
}

module.exports = FindPhotos;
