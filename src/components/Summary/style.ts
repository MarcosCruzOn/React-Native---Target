import { StyleSheet } from 'react-native'

import { color, fontFamily } from '@/theme'

export const styles = StyleSheet.create({
	container: {
		gap: 5,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	label: {
		fontSize: 12,
		color: color.white,
		fontFamily: fontFamily.regular,
	},
	value: {
		fontSize: 18,
		color: color.white,
		fontFamily: fontFamily.bold,
	},
})
