import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import emoji from 'emoji-dictionary';
import shuffleArray from './shuffle-array';

const Grid = () => {
	const [total, setTotal] = useState(6);
	const [target, setTarget] = useState();

	const init = () => {
		// shuffle array
		const shuffled = shuffleArray(emoji.names);
		let arr = shuffled.slice(0, total);
		let randomIndex = Math.floor(Math.random() * arr.length);
		setTarget(arr[randomIndex]);
	};
	useEffect(() => {
		init();
	}, []);
	return (
		<View>
			<Text>{target && emoji.getUnicode(target)}</Text>
		</View>
	);
};

export default Grid;
