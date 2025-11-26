import { color, fontFamily } from '@/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingTop: 32,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 32,
	},
	title: {
		color: color.black,
		fontSize: 24,
		fontFamily: fontFamily.bold,
	},
	subtitle: {
		fontSize: 14,
		color: color.gray[500],
		fontFamily: fontFamily.regular,
	},
})
