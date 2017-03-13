import React from 'react';
import ReactDOM from 'react-dom';
import Dot from './components/dot.js';
import ShowName from './components/name.js';
import { searchKeyWords } from './utils/utils.js';
import { wordColor } from './data/Carol1.js';
import { intro, content } from './data/content.js';

class Main extends React.Component{
	static defaultProps = {
		width: 600, height: 600
	};

	constructor(props) {
		super(props);
		this.state = {
			language: 'cht',
			input: [{name: "belivet", opacity: 0.9}, 
					{name: "richard", opacity: 0.1}]
		};

		this.clickNames = this.clickNames.bind(this);
	}

	clickNames(word) {
		let newInput = this.state.input;
		if( (word!=newInput[0].name) && (word!=newInput[1].name) ){
			newInput[0].name = newInput[1].name;
			newInput[0].opacity = newInput[1].opacity;
			newInput[1].name = word;
			newInput[1].opacity = 1.0;

			this.setState({input: newInput});
		}
	}

	handleOpacity(num, event) {
		let newInput = this.state.input;
		newInput[Number(num)].opacity = event.target.value / 100;

		this.setState({input: newInput});
	}

	handleLanguage(language, event) {
		this.setState({language: language});
	}

	render() {
		let style = {
			height: this.props.height,
			width: this.props.width / 2.2
		};
		let found0 = searchKeyWords(wordColor, this.state.input[0].name.toLowerCase());
		let found1 = searchKeyWords(wordColor, this.state.input[1].name.toLowerCase());
		return(
			<div className="main">

				<div className="graph">
					
					<div className="discribe" style={style}>
						The color<br/>when<br/>they talk<br/>about<br/>
						<div className="keyword">
							{this.state.input[0].name.toUpperCase()}
						</div>
						<input type="range" 
						       min="0" max="100" 
						       step="1" 
						       value={this.state.input[0].opacity * 100}
						       onChange={this.handleOpacity.bind(this, '0')} />
						and
						<div className="keyword">
							{this.state.input[1].name.toUpperCase()}
						</div>
						<input type="range" 
						       min="0" max="100" 
						       step="1" 
						       value={this.state.input[1].opacity * 100}
						       onChange={this.handleOpacity.bind(this, '1')} />
					</div>

					<svg width={this.props.width} height={this.props.height}>
						<Dot arrColor={ (found0==undefined)?[]:found0}
		  					 opacity={this.state.input[0].opacity} 
		  					 center={[300, 300]}
		  					 radius={300} />

		  				<Dot arrColor={ (found1==undefined)?[]:found1}
		  					 opacity={this.state.input[1].opacity} 
		  					 center={[300, 300]}
		  					 radius={300} />
					</svg>

					<ShowName callback={this.clickNames} />

				</div>

				<div className="chooseLanguage">
					<button type="button"
							onClick={this.handleLanguage.bind(this, 'cht')}>繁體中文</button>
					<button type="button"
							onClick={this.handleLanguage.bind(this, 'en')}>English</button>
				</div>

				<div className="intro">
				{ intro[ this.state.language ] }
				</div>

				<div id="separate">
				HOW WE GET THE COLOR
				</div>

				<div className="content">
				{ content[0][ this.state.language ] }<br/>
				<br/>
				{ content[1][ this.state.language ] }<br/>
				<br/>
				{ content[2][ this.state.language ] }
				</div>

				<div id="separate">
				HOW WE PRESENT THE COLOR
				</div>

				<div className="content">
				{ content[3][ this.state.language ] }<br/>
				<br/>
				{ content[4][ this.state.language ] }
				</div>

				<div id="separate">
				Voila! Here's the result.
				</div>

			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('main'));

