// services/users.js
import request from '../utils/request';
import qs from 'qs';
// const URL='http://192.168.20.137:3115';
const URL='/api/';
const type=[
	'in_theaters',
	'top250',
	'coming_soon'
]
// URL+'/v2/movie/in_theaters'
// export async function query(params) {
// 	console.log(qs.stringify(params),params)
//   // return request(URL+`/v2/movie${qs.stringify(params)}`);
//   return request(URL+`${params.tp}`);
// }

export default {
 	query:async function (params) {
		console.log(qs.stringify(params),params)
  		// return request(URL+`/v2/movie${qs.stringify(params)}`);
  		return request(URL+`${params.tp}`);
	},
	 querybyid:async function (params) {
		console.log(qs.stringify(params),params)
	  	// return request(URL+`/v2/movie${qs.stringify(params)}`);
	  	return request(URL+'searchById?id='+`${params.id}`);
	}
}

