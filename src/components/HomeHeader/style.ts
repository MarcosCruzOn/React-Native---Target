import { color, fontFamily } from '@/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 324,
		paddingHorizontal: 24,
		justifyContent: 'flex-end',
		paddingBottom: 32,
		gap: 24,
	},
	label: {
		fontSize: 12,
		color: color.gray[100],
		fontFamily: fontFamily.regular,
	},
	total: {
		fontSize: 32,
		color: color.white,
		fontFamily: fontFamily.bold,
	},
	summary: {
		width: '100%',
		gap: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
