import React from 'react';
import { rgbToHsv } from './../utils/color-conversion-algorithms.js';

class Dot extends React.Component{
	static defaultProps = {
		center: [300, 300], radius: 300
	};

	constructor(props){
		super(props);
		this.getCoord = this.getCoord.bind(this);
	}

  	getCoord(angle, radius){
		let x, y;
		let { center } = this.props;

		x = center[0] - radius * Math.cos(Math.PI * angle / 180);
		y = center[1] - radius * Math.sin(Math.PI * angle / 180);

		return {x, y};
	}

	render(){
		let { center, radius } = this.props;
		let draw = this.props.arrColor.map((val, idx) => {
		  	// 1. convert from rgb to hsv
		  	let hsv = rgbToHsv(parseInt(val.substring(1, 3), 16),
		  					   parseInt(val.substring(3, 5), 16),
		  					   parseInt(val.substring(5, 7), 16));
		  	// 2. calculate coord
		  	let coord = this.getCoord(360*hsv[0], radius*hsv[1]);
		  	return (
		  		<circle id="dots"
		  				key={idx}
		  				cx={coord.x}
		  				cy={coord.y}
		  				r={10}
		  				fill={val}
		  				fillOpacity={this.props.opacity} />
		  	);
		});
		return(
			<g>{draw}</g>
		);
	}
}

export default Dot;