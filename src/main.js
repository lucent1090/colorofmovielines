import React from 'react';
import ReactDOM from 'react-dom';
import Ring from './components/ring.js'
import { keyWords } from './data/names.js';

class Main extends React.Component{
	static defaultProps = {
		width: 600, height: 600
	};

	constructor(props){
		super(props);
		this.state = {
			input: "belivet",
		};
	}

	clickNames(word){
		this.setState({input: word});
	}

	render(){
		let style = {
			height: this.props.height,
			width: this.props.width / 2.2
		};
		
		let names = keyWords.map((val, idx) => {
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
						<Ring keyword={this.state.input.toLowerCase()}
							  center={[300, 300]} />
					</svg>

				</div>

			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('main'));

