import reqwest from "reqwest";
const OPEN_WEATHER_URL = "http://samples.openweathermap.org/data/2.5/weather?appid=bf8dc15b12c4d7453214f3a5f8175983";


module.exports= {
	getTemp : function(location){
	var encodeLocation = encodeURIComponent(location);
	var reqUrl = `${OPEN_WEATHER_URL}&q=${encodeLocation}`;
	return reqwest({
								url : reqUrl,
								crossOrigin: true
							}).then((res)=>{
							if(res.cod && res.message){
								throw new Error(res.message);
							}else{
								return res.main.temp;
							}
					}, (rej)=>{
						throw new Error(rej.message);
					});

	}

}
