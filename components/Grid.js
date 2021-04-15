import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import emoji from 'emoji-dictionary';
import shuffleArray from './shuffle-array';

const Grid = () => {
	const [total, setTotal] = useState(6);

	const init = () => {
		// shuffle array
		const shuffled = shuffleArray(emoji.names);
		let arr = shuffled.slice(0, total);
		console.log(arr);
	};
	useEffect(() => {
		init();
	}, []);
	return (
		<View>
			<Text>Grid here</Text>
		</View>
	);
};

export default Grid;
