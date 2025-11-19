import { View } from 'react-native'
import { HomeHeader } from './components/HomeHeader'

export default function Index() {
	const summary = {
		total: '2.680,00',
		input: { label: 'Entradas', value: 'R$ 6.184,90' },
		output: { label: 'Saidas', value: 'R$ - 800,00' },
	}

	return (
		<View style={{ flex: 1 }}>
			<HomeHeader data={summary} />
		</View>
	)
}
