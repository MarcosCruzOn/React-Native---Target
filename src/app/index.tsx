import { View } from 'react-native'

import { router } from 'expo-router'

import HomeHeader from '@/components/HomeHeader'
import { Target } from '@/components/Target'
import { List } from '@/components/List'
import { Separator } from '@/components/Separator'
import { color } from '@/theme'
import { Button } from '@/components/Button'

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
				data={targets}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Target
						data={item}
						onPress={() =>
							router.navigate(`/in-progress/${item.id}`)
						}
					/>
				)}
				emptyMessage="Nenhuma meta craida ainda."
				containerStyle={{ paddingHorizontal: 24 }}
			/>
			<View style={{ padding: 24, backgroundColor: color.white }}>
				<Button
					title="Nove Meta"
					onPress={() => router.navigate('/target')}
				/>
			</View>
		</View>
	)
}
