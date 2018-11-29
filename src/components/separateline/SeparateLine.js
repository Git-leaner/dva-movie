import React from 'react';
import style from './SeparateLine.scss'

class SeparateLine extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render(){
		return (
			<div className={style.seprater}></div>
		)
	}
}
export default SeparateLine;