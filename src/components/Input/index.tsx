import { View, TextInput, TextInputProps, Text } from 'react-native'

import { styles } from './style'
import { color } from '@/theme'

type Props = TextInputProps & {
	label?: string
}

export function Input({ label, ...rest }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={styles.input}
				placeholderTextColor={color.gray[400]}
				{...rest}
			/>
		</View>
	)
}
