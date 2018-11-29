import React from 'react';
import ListViewExample from '../../components/ListViewExample.js';

class MoviePage extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render() {
		return (
			<ListViewExample />
		)
	}	
}

export default MoviePage;