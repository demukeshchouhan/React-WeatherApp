import Unsplash, {toJson } from 'unsplash-js';

const API_KEY = "9b841ca5e0fef699db9c13d8af6cd8bec2778b0fc779346cfc0de703f6494594";
const API_KEY_SECRET = "1b9afb33a59a8928bd603d382b96c5cd20a7ba1b2ec30c18465a651b201e785a";

// https://www.murmuring-eyrie-45595.herokuapp.com

const unsplash = new Unsplash({
	applicationId: API_KEY,
 	secret: API_KEY_SECRET
});


const fetchPhoto = (input) =>{
		return unsplash.photos
		.searchPhotos(input, [11, 88], 1, 15)
		.then(toJson)
		.then(json => {
			console.log(json);
			return json;
		})

	}

export default fetchPhoto;
