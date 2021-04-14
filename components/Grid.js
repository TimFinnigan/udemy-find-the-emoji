import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import emoji from 'emoji-dictionary';

const Grid = () => {
	useEffect(() => {
		// console log emoji names
		console.log(emoji.names);
	}, []);
	return (
		<View>
			<Text>Grid here</Text>
		</View>
	);
};

export default Grid;
