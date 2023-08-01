import { StyleSheet, Dimensions } from 'react-native';
import { GLOBAL_COLOR } from './globals';
const { width:screenWidth, height: screenHeight } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GLOBAL_COLOR.TERTIARY,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 67,
        paddingHorizontal: 10,
        backgroundColor: GLOBAL_COLOR.PRIMARY,
    },
    forms :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {flex: 1}
})