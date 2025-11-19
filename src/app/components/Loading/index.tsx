import { ActivityIndicator } from 'react-native'

import { styles } from './style'

import { color } from '@/theme/colors'

export function Loading() {
	return (
		<ActivityIndicator
			style={styles.container}
			size="large"
			color={color.blue[500]}
		/>
	)
}
