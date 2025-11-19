import { color, fontFamily } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listContent: {
		gap: 16,
		paddingTop: 16,
		paddingBottom: 72,
	},
	title: {
		marginTop: 24,
		paddingBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: color.gray[200],
		fontFamily: fontFamily.medium,
		fontSize: 18,
		color: color.black,
	},
	empty: {
		fontFamily: fontFamily.regular,
		fontSize: 14,
		color: color.gray[400],
		textAlign: 'center',
	},
})
