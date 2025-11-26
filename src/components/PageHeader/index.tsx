import { View, TouchableOpacity, Text } from 'react-native'

import { router } from 'expo-router'

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './style'
import { color } from '@/theme'

type Props = {
	title: string
	subtite?: string
	rightButton?: {
		onPress?: () => void
		icon: keyof typeof MaterialIcons.glyphMap
	}
}

export function PageHeader({ title, subtite, rightButton }: Props) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => router.back()}
					activeOpacity={0.8}
				>
					<MaterialIcons
						name="arrow-back"
						size={24}
						color={color.black}
					/>
				</TouchableOpacity>

				{rightButton && (
					<TouchableOpacity
						onPress={rightButton.onPress}
						activeOpacity={0.8}
					>
						<MaterialIcons
							name={rightButton.icon}
							size={24}
							color={color.gray[500]}
						/>
					</TouchableOpacity>
				)}
			</View>
			<Text style={styles.title}>{title}</Text>
			{subtite && <Text style={styles.subtitle}>{subtite}</Text>}
		</View>
	)
}
