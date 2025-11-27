import { View } from 'react-native'

import { styles } from './style'
import { color } from '@/theme'

import { Option } from './option'
import { TransactionType } from '@/utils/transactionsType'

type Props = {
	selected: TransactionType
	onChange: (type: TransactionType) => void
}

export function TransactionsTypes({ selected, onChange }: Props) {
	return (
		<View style={styles.container}>
			<Option
				icon="arrow-upward"
				title="Guardar"
				isSelected={selected === TransactionType.Input}
				selectdColor={color.blue[500]}
				onPress={() => onChange(TransactionType.Input)}
			/>

			<Option
				icon="arrow-downward"
				title="Resgatar"
				isSelected={selected === TransactionType.Output}
				selectdColor={color.red[400]}
				onPress={() => onChange(TransactionType.Output)}
			/>
		</View>
	)
}
