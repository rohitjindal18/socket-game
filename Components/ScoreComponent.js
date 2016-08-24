import React from 'react';
import Paper from  'material-ui/Paper';

class ScoreComponent extends React.Component {
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
		width : 250,
		height : 600,
		marginLeft : 50,
		backgroundColor : '#F7F7F7',
		marginTop : 80
	}
}

export default ScoreComponent;