import React from 'react';


const Card = ({ id, name, email }) => {
	//const { id, name, email } = props; // one way of destruction and the other passing it as a parameter in the above 
	return (
		<div className=' tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?70x70`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

	);
}

export default Card;