import React from 'react';
import ReactDOM from 'react-dom';
import Ring from './components/ring.js';
import { searchKeyWords } from './utils/utils.js';
import { keyWords } from './data/Carol_all.js';

class Main extends React.Component{
	static defaultProps = {
		width: 600, height: 600
	};

	constructor(props){
		super(props);
		this.state = {
			input: "carol"
		};
	}

	render(){
		let findWord = searchKeyWords(keyWords, this.state.input.toLowerCase());

		return(
			<div className="main">
				<svg width={this.props.width} height={this.props.height}>
					<Ring keyword={this.state.input.toLowerCase()}
						  arrColor={ (findWord==undefined)?[]:findWord["colors"]}
						  center={[300, 300]} 
						  startRaduis={2} />
				</svg>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('main'));

