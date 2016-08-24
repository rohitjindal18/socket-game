import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './Components/App.js';

injectTapEventPlugin();

class AppMain extends React.Component {
	render() {
		return(
			<MuiThemeProvider>
				<App/>
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(<AppMain/>, document.getElementById('root-div'));