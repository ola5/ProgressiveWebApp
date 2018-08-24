import React, { Component } from 'react';
import './Hello.css';


// =========
// One way of creating a Component
// =========
// class Hello extends Component {
// 	render() {
// 		return (
// 			<div className='f1 tc'>
// 				<h1> Hello World</h1>
// 				<p> Welcome to React</p>
// 				<p>{this.props.greeting}</p>
// 				<p>{this.props.myPeople}</p>

// 			</div>
// 		);
// 	}
// }

// export default Hello;



// ================
// Another way of creating a Component: 
// 


const Hello = (props) => {
	return (
		<div className='f1 tc'>
			<h1> Hello World</h1>
				<p> Welcome to React</p>
 				<p>{props.greeting}</p>
 				<p>{props.myPeople}</p>
		</div>

		);
}

export default Hello;
