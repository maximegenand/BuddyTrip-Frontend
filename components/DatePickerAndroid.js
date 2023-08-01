// Android specific API
import { useState } from 'react';
import { Text, Button } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export function DatePickerAndroid() {
	const [date, setDate] = useState(new Date());

	//! Don't remove the <event> function param or it will crash
	function onDateChange(event, selectedDate) {
		setDate(selectedDate);
	}

	function showDatePicker() {
		DateTimePickerAndroid.open({
			value: date,
			onChange: onDateChange,
			mode: 'date',
		});
	}

	return (
		<>
			<Text> Date selectionnée: {date.toLocaleString()} </Text>
			<Button
				onPress={() => showDatePicker()}
				title='Sélectionner une date'
			/>
		</>
	);
}