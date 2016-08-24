import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class DialogName extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			nameInput : "",
			isOpen : true
		}
	}

	handleClose = () => {
    	this.setState({
    		nameInput : this.refs.textInput.input.value,
    		isOpen : false
    	} , this.passName);
  	}

  	passName(){
  		this.props.passNamePlayer(this.state.nameInput);
  	}

	render() {
		const actions = [
	      <FlatButton
	        label="Submit"
	        primary={true}
	        keyboardFocused={true}
	        onTouchTap={this.handleClose}
	      />,
	    ];
		return(
			<div>
		        <Dialog
		          modal={false}
		          open={this.state.isOpen}
		          actions={actions}
		          onRequestClose={this.handleClose.bind(this)}
		          style ={styles.dialogStyle}
		        >
		          <TextField 
		          	  ref = "textInput"
				      hintText="Enter your Name"
		          	
				    /><br />
		        </Dialog>
			</div>
		);
	}
};

var styles  = {
	dialogStyle : {
		width : 400,
		marginLeft : '35%',
		marginTop : '-5%'
	}
}


export default DialogName;