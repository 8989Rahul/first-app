
import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Show from "./show";
const showApp = require("./showsApp");

ReactDOM.render(
	<div className="tc">
		<Show showApp={showApp}/>
	</div>
	, document.getElementById('root'));