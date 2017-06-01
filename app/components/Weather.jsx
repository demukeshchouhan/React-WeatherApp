import React, {Component} from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import OpenWeatherMap from "OpenWeatherMap";

export default class Weather extends Component {
	constructor(props){
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		this.state = {
			isLoading: false
		}
	}
	handleSearch(location){
		// debugger;
		this.setState({
			isLoading : true
		});
		OpenWeatherMap.getTemp(location).then((temp)=>{
			this.setState({
				location:location,
				temp:temp,
				isLoading : false
			});
		}, (err)=>{
			alert(err);
			this.setState({
				isLoading : false
			});
		});

	}
	render(){
		let {isLoading, temp, location} =  this.state;
		function renderMsg(){
			if(isLoading){
				return (
					<h3><em>loading weather...</em></h3>
				);
			}else if(temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
					<h2 className="text-center">Weather Lookup</h2>
					<WeatherForm onSearch={this.handleSearch}/>
					{renderMsg()}
					</div>
				</div>
			</div>
		);
	}
}
