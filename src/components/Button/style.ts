import { color, fontFamily } from '@/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: color.blue[500],
		height: 48,
		width: '100%',
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: color.white,
		fontSize: 16,
		fontFamily: fontFamily.medium,
	},
})
