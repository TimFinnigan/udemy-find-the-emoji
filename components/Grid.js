import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';

import emoji from 'emoji-dictionary';
import shuffleArray from './shuffle-array';

const Grid = () => {
	const [total, setTotal] = useState(6);
	const [target, setTarget] = useState();

	const init = () => {
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
			<Text>Find the emoji!</Text>
			<Text>Level 1</Text>
			<Text>{target && emoji.getUnicode(target)}</Text>
			<Pressable>
				<Text>Start</Text>
			</Pressable>
		</View>
	);
};

export default Grid;
