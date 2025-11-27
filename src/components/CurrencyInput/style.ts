import { color, fontFamily } from '@/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		gap: 10,
	},
	label: {
		color: color.gray[600],
		fontFamily: fontFamily.medium,
		fontSize: 12,
	},
	input: {
		color: color.black,
		fontSize: 16,
		fontFamily: fontFamily.regular,
		paddingBottom: 12,
		borderBottomWidth: 1,
		borderBottomColor: color.gray[400],
	},
})
