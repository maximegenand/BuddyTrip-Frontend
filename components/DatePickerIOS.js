import { useState } from 'react';
import { Text } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker'

export default function DatePickerIOS() {
	const [date, setDate] = useState(new Date());

	//! Don't remove the <event> function param or it will crash
	function onDateChange(event, selectedDate) {
		const currentDate = selectedDate;
		setDate(currentDate);
	}

	return (
		<>
			<Text> Date selectionnée: {date.toLocaleString()} </Text>
			<DatePicker
				value={date}
				mode='date'
				onChange={(event, value) => onDateChange(event, value)}
			/>
		</>
	);
}