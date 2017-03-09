import React from 'react';
import ReactDOM from 'react-dom';
import Dot from './components/dot.js';
import ShowFrame from './components/frame.js';
import ShowName from './components/name.js';
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
			colorClicked: "#323a17"
		};

		this.clickColor = this.clickColor.bind(this);
		this.clickNames = this.clickNames.bind(this);
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
					</div>
					<ShowName callback={this.clickNames} />

					<svg width={this.props.width} height={this.props.height}>
						<Dot arrColor={ (found==undefined)?[]:found}
		  					 center={[300, 300]}
		  					 radius={300}
		  					 callback={this.clickColor} />
					</svg>

				</div>

				<div className="intro">
				A good movie tells stories in any forms. Through the sounds, the clothes, the lines and of course the colors. In the movie Carol, Todd Haynes use a intrepid red in the gray New York to reveal the desire in love, a forbidden love between two women. We decide to make a small project to understand more about how they arrange the color related to the main actor/actress. 
				</div>

				<div id="separate">
				HOW WE GET THE COLOR
				</div>

				<div className="content">
				In order to associate the actor/actress and their color, we extract the color theme from the scene whenever the name are mentioned in the conversations. There are total 1422 lines in the movie Carol. We go through all these lines and pick out the frame with specific name mentioned. <br/>
				<br/>
				By MCCQ (median cut color quantization) algorithm, we can extract a set of colors as the color theme of each frame. With this set of colors, we now can associate the character with a specific set of colors.To improve the result of MCCQ and consider that this is an extraction from a film scene, we did not put the black color as part of color theme. <br/>
				<br/>
				You can now try to click on different name above and see the beautiful colors associate with them. And you can also click on the color dot to see all the frames that contain this color. (Notice: some general color may be contained in lots of frames and the frame list will be really long.) 
				</div>
				<ShowFrame width={this.props.width}
						   colorClicked={this.state.colorClicked} />

				<div id="separate">
				HOW WE PRESENT THE COLOR
				</div>

				<div className="content">
				MCCQ algorithm works based on the RGB color space, which means it's on a 3-dimension world. To show the color in 2-dimension world, we decide to use the concept of color ring by converting the RGB color to HSV (Hue, Saturation, Value) color space. <br/>
				<br/>
				For each RGB color vector, we will have a correspondent HSV color vector. Then we use the hue as the degree and the saturation as the radius in our color ring. (This part is exactly same as the definition of HSV color space) The value, which also called the brightness in color space, will not be shown in the color ring coordinate but directly shown in the color of each dot. 
				</div>

				<div id="separate">
				Voila! Here's the result.
				</div>

			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('main'));

