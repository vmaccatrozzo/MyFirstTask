import React from "react";
import PropValueList from './PropertyValueList';
import PropValue from './PropValue';



class App extends React.Component {
	render() {
	 	console.log(this.props.myTableRows);
		if (this.props.myTableRows.length == 0) {
			return (<div>
					<form >
						<label>Resource URL: <input type="text" id ="input_url" defaultValue="http://viaf.org/viaf/97105654"></input></label>
						<button onClick={this.props.onSampleClick} className='btn btn-primary btn-md'>
							Search
						</button>	
					</form>
					</div>
					)
		}else{
			return (
				<div>
					<form id = 'result'>
						<PropValueList propValues={this.props.myTableRows} onValueClick={this.props.onValueClick} />
					</form>
				</div>
			);
 		}
	}
}

App.propTypes = {
	myTableRows: React.PropTypes.array,
	onSampleClick: React.PropTypes.func
};

export default App;
