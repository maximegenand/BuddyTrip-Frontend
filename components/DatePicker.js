import { useState } from 'react';
import { Text, StyleSheet } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker'

export default function DatePickerAll() {
	const [date, setDate] = useState(new Date());

	//! Don't remove the <event> function param or it will crash
	function onDateChange(event, selectedDate) {
		const currentDate = selectedDate;
		setDate(currentDate);
		console.log('onDateChange')
	}

	return (
		<>
			<Text style={styles.date}> Date sélectionnée: {date.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' })} </Text>
			<DatePicker
				value={date}
				mode='date'
				onChange={(event, value) => onDateChange(event, value)}
			/>
		</>
	);
}


const styles = StyleSheet.create({
	date: {
		fontSize: 20,
	},
})
