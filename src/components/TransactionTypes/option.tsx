import { ColorValue, Pressable, PressableProps, Text } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { color } from '@/theme'
import { styles } from './style'

type Props = PressableProps & {
	isSelected: boolean
	title: string
	icon: keyof typeof MaterialIcons.glyphMap
	selectdColor: ColorValue
}

export function Option({
	isSelected,
	title,
	icon,
	selectdColor,
	...rest
}: Props) {
	return (
		<Pressable
			style={[
				styles.option,
				isSelected && { backgroundColor: selectdColor },
			]}
			{...rest}
		>
			<MaterialIcons
				name={icon}
				size={24}
				color={isSelected ? color.white : color.gray[500]}
			/>

			<Text style={[styles.title, isSelected && { color: color.white }]}>
				{title}
			</Text>
		</Pressable>
	)
}
