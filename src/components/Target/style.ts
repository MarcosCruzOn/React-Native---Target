import { color, fontFamily } from '@/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		height: 72,
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 12,
		paddingBottom: 16,
	},
	content: {
		flex: 1,
		gap: 7,
	},
	name: {
		fontSize: 16,
		fontFamily: fontFamily.medium,
		color: color.black,
	},
	status: {
		fontSize: 10,
		color: color.gray[500],
		fontFamily: fontFamily.regular,
	},
})
