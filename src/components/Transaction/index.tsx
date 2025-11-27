import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from './style'
import { color } from '@/theme'

import { MaterialIcons } from '@expo/vector-icons'

import { TransactionsType } from '@/utils/transactionsType'

export type TransactionProps = {
	id: string
	value: string
	date: string
	description?: string
	type: TransactionsType
}

type Props = {
	data: TransactionProps
	onRemove: () => void
}

export function Transaction({ data, onRemove }: Props) {
	return (
		<View style={styles.container}>
			<MaterialIcons
				name={
					data.type === TransactionsType.Input
						? 'arrow-upward'
						: 'arrow-downward'
				}
				size={20}
				color={
					data.type === TransactionsType.Input
						? color.blue[500]
						: color.red[400]
				}
				onPress={onRemove}
			/>
			<View style={styles.info}>
				<Text style={styles.value}>{data.value}</Text>
				<Text style={styles.description} numberOfLines={1}>
					{data.date} {data.description && ` •  ${data.description}`}
				</Text>
			</View>

			<TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
				<MaterialIcons name="close" size={18} color={color.gray[500]} />
			</TouchableOpacity>
		</View>
	)
}
