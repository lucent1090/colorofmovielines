import React from 'react'
import Dot from './dot.js'

class AnimateDots extends React.Component{

	static defaultProps = {
		width: 600, height: 600,
		colors: []
	};

	constructor(props){
		super(props);
		this.state = {
			aniName: ""
		};
	}

	componentWillEnter(callback) {
		callback();
		this.setState({aniName: "fadeIn"});
		
	}

	componentWillLeave(callback){
		this.setState({aniName: "fadeOut"});
		callback();
	}

	render(){
		let { height, width, colors } = this.props;
		return (
			<svg width={width} height={height}
				 className={this.state.aniName}>
				<Dot arrColor={ (colors==undefined)?[]:colors}
  					 center={[300, 300]}
  					 radius={300}
  					 callback={()=>{}} />
			</svg>
		);
	}

}

export default AnimateDots;