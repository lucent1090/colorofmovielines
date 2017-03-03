import React from 'react';
import ReactDOM from 'react-dom';
import Dot from './components/dot.js';
import ShowFrame from './components/frame.js';
import { searchKeyWords } from './utils/utils.js';
import { wordColor } from './data/Carol1.js';

class Main extends React.Component{
	static defaultProps = {
		width: 600, height: 600
	};

	constructor(props){
		super(props);
		this.state = {
			input: "belivet",
			colorClicked: ""
		};

		this.clickColor = this.clickColor.bind(this);
	}

	clickColor(color){
		this.setState({colorClicked: color});
	}

	clickNames(word){
		this.setState({input: word});
	}

	render(){
		let style = {
			height: this.props.height,
			width: this.props.width / 2.2
		};
		let found = searchKeyWords(wordColor, this.state.input.toLowerCase());
		let names = wordColor.map((val, idx) => {
			return (
				<li key={idx} onClick={this.clickNames.bind(this, val.keyword)}>
					{val.keyword}
				</li>
			);
		});

		return(
			<div className="main">
				<div className="graph">
					<div className="discribe" style={style}>
						The color<br/>when<br/>they talk<br/>about<br/>
						<div className="keyword">
							{this.state.input.toUpperCase()}
						</div>
						<div className="nameList">
							<ul>
								{names}
							</ul>
						</div>
					</div>
					<svg width={this.props.width} height={this.props.height}>
						<Dot arrColor={ (found==undefined)?[]:found}
		  					 center={[300, 300]}
		  					 radius={300}
		  					 callback={this.clickColor} />
					</svg>
				</div>
				
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('main'));

