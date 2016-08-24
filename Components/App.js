import React from 'react';
import GameComponent from './GameComponent.js';
import ScoreComponent from './ScoreComponent.js';
import DialogName from './DialogName.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isStarted : true,
			playerName : ""
		}
	}
	handlePlayerName(name) {
		this.setState({
			playerName : name,
			isStarted : false
		});
	}

	render() {
		if(this.state.isStarted){
			return(
				<DialogName passNamePlayer={this.handlePlayerName.bind(this)}/>
			);
		}
		else {
			return(
				<div className="mainBoardDiv">
					<GameComponent/>
					<ScoreComponent/>
				</div>
			);
		}
	}
}

export default App;