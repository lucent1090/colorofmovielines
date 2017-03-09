import React from 'react';
import { wordColor } from './../data/Carol1.js';

const characters = [
	["carol", "aird"],    ["therese", "belivet"], ["abby", "gerhard"], 
	["richard", "semco"], ["harge", "aird"],      ["dannie", "mcelroy"],
	["tommy", "tucker"],  ["fred", "haymes"],     ["phil", "mcelroy"] 
];

class ShowName extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			names: []
		};
	}

	handleClick(word){
		this.props.callback(word);
	}

	componentWillMount(){
		let getNames = characters.map((val, idx) => {
			let foundFirstName = wordColor.indexOfKeyword(val[0], wordColor);
			let foundLastName = wordColor.indexOfKeyword(val[1], wordColor);

			return(
				<div className="names" key={idx}>
					<button type="button" 
							disabled={(foundFirstName==undefined)?true:false}
							onClick={this.handleClick.bind(this, val[0])}>
						{val[0]}
					</button>
					<button type="button" 
							disabled={(foundLastName==undefined)?true:false}
							onClick={this.handleClick.bind(this, val[1])}>
						{val[1]}
					</button>

				</div>
			);
		});
		this.setState({names: getNames});
	}

	render(){
		
		return(
			<div>{this.state.names}</div>
		);
	}
}

export default ShowName;