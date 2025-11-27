import { View } from 'react-native'

import { Input } from '@/components/Input'
import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/Button'
import { CurrencyInput } from '@/components/CurrencyInput'

export default function Target() {
	return (
		<View style={{ flex: 1, padding: 24 }}>
			<PageHeader
				title="Definir Meta"
				subtite="Economize para alcançar sua meta"
				rightButton={{
					icon: 'edit',
					onPress: () => {},
				}}
			/>
			<View style={{ marginTop: 32, gap: 16 }}>
				<Input label="Meta" placeholder="Ex: Viagem para o Caribe" />
				<CurrencyInput
					label="Valor alvo"
					value={0}
					placeholder="R$ 0,00"
				/>
				<Button title="Salvar"></Button>
			</View>
		</View>
	)
}
