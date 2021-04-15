import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';

import emoji from 'emoji-dictionary';
import shuffleArray from './shuffle-array';
import styles from './styles';

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
		<View style={styles.startContainer}>
			<Text style={styles.findText}>Find the emoji!</Text>
			<Text style={styles.level}>Level 1</Text>
			<Text style={styles.target}>
				{target && emoji.getUnicode(target)}
			</Text>
			<Pressable style={styles.startButton}>
				<Text style={styles.startButtonText}>Start</Text>
			</Pressable>
		</View>
	);
};

export default Grid;
