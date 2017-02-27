import React from 'react';

class Slice extends React.Component {
	
	static defaultProps = {
		center: [300, 300]
  	};

	constructor(props){
		super(props);
		this.getCoord = this.getCoord.bind(this);
	}

	getCoord(startAngle, endAngle, radius){
		var x1, y1, x2, y2;

		x1 = this.props.center[0] - radius * Math.cos(Math.PI * startAngle / 180);
		y1 = this.props.center[1] - radius * Math.sin(Math.PI * startAngle / 180);
		x2 = this.props.center[0] - radius * Math.cos(Math.PI * endAngle / 180);
		y2 = this.props.center[1] - radius * Math.sin(Math.PI * endAngle / 180);

		return {x1, y1, x2, y2};
	}

	drawPath(){
		let { angleStart, angleEnd, radiusOutside, radiusInside } = this.props;

		if( radiusInside > radiusOutside ){ console.log("rInside is bigger than rOutside"); }

		let arcOutside = this.getCoord(angleStart, angleEnd, radiusOutside);
		let arcInside = this.getCoord(angleEnd, angleStart, radiusInside);

		let largeArc = ( (angleEnd-angleStart) > 180 ) ? 1 : 0;
		
		return [`M${arcOutside.x1} ${arcOutside.y1}`, 
				`A${radiusOutside} ${radiusOutside}`, 0, largeArc, 1, arcOutside.x2, arcOutside.y2,
				`L${arcInside.x1} ${arcInside.y1}`,
				`A${radiusInside} ${radiusInside}`, 0, largeArc, 0, arcInside.x2, arcInside.y2,
				'Z'].join(' ');
	}

	render(){
		let color = this.props.color;		
		let d = this.drawPath();
		return (
			<path d={d}
			      stroke="white"
			      strokeWidth={1}
			      fill={color} />
		);
	}
}

export default Slice;
