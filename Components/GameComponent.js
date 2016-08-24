import React from 'react';
import Paper from 'material-ui/Paper';

class GameComponent extends React.Component {
	render() {
		return(
			<div>
				<Paper zDepth={3} style={styles.gameBoard}>
				</Paper>
			</div>
		);
	}
};

var styles = {
	gameBoard : {
		width : 350,
		height : 600,
		marginLeft : 350,
		backgroundColor : '#F7F7F7',
		marginTop : 80
	}
}

export default GameComponent;