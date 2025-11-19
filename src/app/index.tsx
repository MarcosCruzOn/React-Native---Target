import { View } from 'react-native'
import HomeHeader from '@/components/HomeHeader'

import { Target } from '@/components/Target'

import { List } from '@/components/List'
import { Separator } from '@/components/Separator'
import { color } from '@/theme'

const summary = {
	total: '2.680,00',
	input: { label: 'Entradas', value: 'R$ 6.184,90' },
	output: { label: 'Saidas', value: 'R$ - 800,00' },
}

const targets = [
	{
		id: '1',
		name: 'Comprar uma cadeira',
		percentage: '75%',
		current: 'R$ 900,00',
		target: 'R$ 1250,00',
	},
	{
		id: '2',
		name: 'Comprar uma cadeira',
		percentage: '75%',
		current: 'R$ 900,00',
		target: 'R$ 1250,00',
	},
	{
		id: '3',
		name: 'Comprar uma cadeira',
		percentage: '75%',
		current: 'R$ 900,00',
		target: 'R$ 1250,00',
	},
]

export default function Index() {
	return (
		<View style={{ flex: 1 }}>
			<HomeHeader data={summary} />
			<List
				title="Metas"
				data={[]}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Target data={item} />}
				emptyMessage="Nenhuma meta craida ainda."
				containerStyle={{ paddingHorizontal: 24 }}
			/>
		</View>
	)
}
