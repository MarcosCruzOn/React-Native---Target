import { View } from 'react-native'

import { useLocalSearchParams } from 'expo-router'

import { PageHeader } from '@/components/PageHeader'
import { CurrencyInput } from '@/components/CurrencyInput'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { TransactionsTypes } from '@/components/TransactionTypes'

import { useState } from 'react'
import { TransactionType } from '@/utils/transactionsType'

export default function Transaction() {
	const params = useLocalSearchParams<{ id: string }>()

	const [type, setType] = useState(TransactionType.Input)

	return (
		<View style={{ flex: 1, padding: 24 }}>
			<PageHeader
				title="Nova transação"
				subtite="A cada valor guardado você fica mais próximo da sua meta. Se esforce  para guardar e evitar retirar"
			/>
			<View style={{ marginTop: 32, gap: 24 }}>
				<TransactionsTypes selected={type} onChange={setType} />

				<CurrencyInput value={0} label="valor" />

				<Input
					label="Motivo Opcional"
					placeholder="Ex: Invertir em ações CDB de 110%"
				/>

				<Button title="Salvar" />
			</View>
		</View>
	)
}
