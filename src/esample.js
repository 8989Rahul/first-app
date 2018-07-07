
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// const Func = (proto) => {
//     console.log(proto)
//     return (
//         <div>
//             <h1 style={{backgroundColor:proto.color1}}>kiran bhalerao</h1>
//             <h2 style={{backgroundColor:proto.color}}>working on react</h2>
//         </div>
//     )
// }

// class Func extends Component {
//     render() {
//         return (
//             <div>
//                 <h1 style={{backgroundColor:this.props.color1}}>kiran bhalerao</h1>
//                 <h2 style={{backgroundColor:this.props.color}}>working on react</h2>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Func color1="red" color="blue" fontSize={50+"px"} />, document.getElementById('root'));
// registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'tachyons';
// import Show from "./show";


// let obj = {
// 	getInitialState: function () {
// 		return ({
// 			color: "red"
// 		});
// 	},
// 	handleClick: function () {
// 		this.setState(function (prevState) {
// 			return {
// 				color: (prevState.color === "red") ? "blue" : "red"
// 			};
// 		});
// 	},
// 	render: function () {
// 		return (
// 			<div>
// 				<h1 style={{ color: this.state.color }}>kiran nivrutti bhalerao</h1>
// 				<button onClick={this.handleClick}>click</button>
// 			</div>
// 		);
// 	}
// }



// const Func = (props) => {
// 	let styles = {
// 		color: props.color,
// 		paddingLeft: props.padding
// 	}
// 	return (
// 		<div>
// 			<h1 style={styles}>kiran nivrutti bhalerao</h1>
// 		</div>
// 	);
// };

// const FuncName = (props) => {
// 	let styles = {
// 		color: props.color,
// 		paddingLeft: props.padding
// 	}
// 	return (
// 		<div>
// 			<h3 style={styles}>lets start with react now</h3>
// 		</div>
// 	);
// }

// ReactDOM.render(React.createElement(Func), document.getElementById('root'));









ReactDOM.render(
	<div className="tc">
		<Show />
	</div>
	, document.getElementById('root'));