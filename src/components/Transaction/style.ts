import { color, fontFamily } from '@/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		height: 72,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 7,
	},
	info: {
		flex: 1,
		gap: 7,
	},
	value: {
		fontSize: 14,
		fontFamily: fontFamily.medium,
		color: color.black,
	},
	description: {
		fontSize: 12,
		fontFamily: fontFamily.regular,
		color: color.gray[500],
	},
})
