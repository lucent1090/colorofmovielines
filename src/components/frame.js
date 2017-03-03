import React from 'react';
import { colorFrame } from './../data/Carol2.js';

class ShowFrame extends React.Component{
	static defaultProps = {
		colorClicked: ""
	};

	constructor(props){
		super(props);
		this.state = {
			show: false
		};

		this.close = this.close.bind(this);
	}

	componentWillReceiveProps(nextProps){
		if( nextProps.colorClicked != "" ){
			this.setState({show: true});	
		}
	}

	close(){
		this.setState({show: false});
	}

	drawCross(r){
		let num1 = r / 1.9;
		let num2 = r * 1.5;
		return ([
			`M${num1} ${num1}`, `L${num2} ${num2}`,
			`M${num1} ${num2}`, `L${num2} ${num1}`
		].join(' '));
	}

	render(){
		let frame = undefined, drawFrame = [];
		if( this.state.show ){
			colorFrame.map((val) => {
				if( val.color == this.props.colorClicked.substring(1, 7) ){
					frame = val.frames;
				}
			});
			if( frame != undefined ){
				drawFrame = frame.map((val, idx) => {
					let url = "./src/data/frames/" + val + ".png";
					return (
						<img key={idx} src={url} />
					);
				});
			}	 
		}

		let radius = 20;
		let d = this.drawCross(radius);
		let closeButton = (this.state.show) ? 
					 (<svg>
						<circle cx={radius} cy={radius} r={radius} fill="gray" onClick={this.close} />
					 	<path d={d} stroke="white" strokeWidth={3} strokeLinecap="round" />
					  </svg>) : (undefined);
		return (
			<div className="relatedFrames">
				{closeButton}
				{drawFrame}
			</div>
		);
	}
}

export default ShowFrame;