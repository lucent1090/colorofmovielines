import React from 'react';
import Slice from './slice.js';

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class Ring extends React.Component {

	static defaultProps = {
    	radius: 30, angle: 2,
    	startRaduis: 70, gap: 2
  	};

  	constructor(props){
		super(props);
		this.draw = this.draw.bind(this);
		this.drawBlock = this.drawBlock.bind(this);
	}

	componentWillMount(){
		this.drawColors = []; 
		this.curBlock = 0;
		this.curRLevel = 0;
		this.nBlock = 360 / this.props.angle;
	}

	drawBlock(rLevel, numStart, numEnd, color){
		let { angle, radius, startRaduis, gap, center } = this.props;
		let key = this.drawColors.length;

		this.drawColors.push(
			<Slice  key={key}
					center={center} 
					angleStart={angle*numStart}
					angleEnd={angle*numEnd}
					radiusOutside={radius + startRaduis + rLevel*radius + rLevel*gap}
					radiusInside={startRaduis + rLevel*radius + rLevel*gap}
					color={color} />
		);
	}

	draw(feq, color){

		if( this.curBlock + feq >= this.nBlock ){
			// 1. draw until last block
			this.drawBlock(this.curRLevel, this.curBlock, this.nBlock, color);
			// 2. draw the rest in the next radius level
			this.curRLevel = this.curRLevel + 1;
			this.curBlock = (this.curBlock + feq) % this.nBlock;
			this.drawBlock(this.curRLevel, 0, this.curBlock, color);
		}else{
			this.drawBlock(this.curRLevel, this.curBlock, this.curBlock+feq, color);
			this.curBlock = this.curBlock + feq;
		}
	}

	render(){
		let { center } = this.props;
		let capKeyword = this.props.keyword.capitalizeFirstLetter();

		let colors = this.props.arrColor;
		colors.map((val) => {
			this.draw(val["feq"], val["color"]);
		});	
		
		return(
			<g className="ring">
				{this.drawColors}
				<circle cx={center[0]}
						cy={center[1]}
						r={14*this.curRLevel}
						fill="white" />
				<text textAnchor="middle"
					  alignmentBaseline="middle" 
					  fontSize={(this.drawColors.length==0) ? 50:10*this.curRLevel}
					  fontWeight="bold" 
					  fill="#191919"
					  x={center[0]} 
					  y={center[1]}>
					{(this.drawColors.length==0)?"Cannot find!":capKeyword}
				</text>
			</g>
		);
	}
}

export default Ring;