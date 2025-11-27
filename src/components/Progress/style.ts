import { color, fontFamily } from '@/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	label: {
		fontSize: 12,
		fontFamily: fontFamily.medium,
		color: color.gray[500],
		marginBottom: 5,
	},
	status: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	value: {
		fontSize: 18,
		color: color.black,
		fontFamily: fontFamily.medium,
		flex: 1,
	},
	target: {
		fontSize: 14,
		color: color.gray[500],
		fontFamily: fontFamily.medium,
	},
	percentage: {
		fontSize: 14,
		fontFamily: fontFamily.bold,
		color: color.blue[500],
	},
	progress: {
		marginTop: 16,
		width: '100%',
		height: 5,
		borderRadius: 5,
		backgroundColor: color.gray[300],
	},
	currentProgress: {
		width: '100%',
		height: 5,
		borderRadius: 5,
		backgroundColor: color.blue[500],
	},
})
