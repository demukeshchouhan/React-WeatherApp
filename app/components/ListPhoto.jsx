import React, {Component} from "react";
import {Col, Row, Clearfix} from "react-bootstrap";

const ListPhoto = (props) =>{
	var showListData = props.listData.map((item, index) => {
		return(
			<span key={item.id}>
			<Col md={4}>
				<h2 className="listData_heading"><strong>By User: </strong><em>{item.user.first_name} {item.user.last_name}</em></h2>
				<img src={item.urls.thumb}/>
			</Col>
			<div className={(index % 3 === 2) ? 'clearfix' : 'hidden' }></div>
			</span>
		);
	});

	return(
		<Row>
			{showListData}
		</Row>
	);
}

module.exports = ListPhoto;
