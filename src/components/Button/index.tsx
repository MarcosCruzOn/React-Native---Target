import {
	TouchableOpacity,
	TouchableHighlightProps,
	ActivityIndicator,
	Text,
} from 'react-native'
import { styles } from './style'
import { color } from '@/theme'

type Props = TouchableHighlightProps & {
	isProcessing?: boolean
	title: string
}

export function Button({ title, isProcessing = false, ...rest }: Props) {
	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={0.8}
			{...rest}
			disabled={isProcessing || rest.disabled}
		>
			<Text style={styles.title}>
				{isProcessing ? (
					<ActivityIndicator size="small" color={color.white} />
				) : (
					title
				)}
			</Text>
		</TouchableOpacity>
	)
}
