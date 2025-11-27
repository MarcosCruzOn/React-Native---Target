import { color, fontFamily } from '@/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		height: 42,
		width: '100%',
		flexDirection: 'row',
		backgroundColor: color.gray[100],
		borderRadius: 8,
	},

	option: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		borderRadius: 8,
		gap: 7,
	},
	title: {
		fontFamily: fontFamily.medium,
		fontSize: 14,
		color: color.gray[500],
	},
})
