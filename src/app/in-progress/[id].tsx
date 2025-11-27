import { View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import { PageHeader } from '@/components/PageHeader'
import { Progress } from '@/components/Progress'
import { Transaction, TransactionProps } from '@/components/Transaction'
import { List } from '@/components/List'
import { Button } from '@/components/Button'

import { TransactionType } from '@/utils/transactionsType'
import { router } from 'expo-router'

export default function InProgress() {
	const params = useLocalSearchParams<{ id: string }>()

	const detail = {
		current: 'R$ 580,00',
		target: '1790,00',
		percentage: 54,
	}

	const transactions: TransactionProps[] = [
		{
			id: '1',
			value: 'R$ 200,00',
			date: '2024-06-01',
			description: 'Recebimento do salário mensal',
			type: TransactionType.Input,
		},
		{
			id: '2',
			value: 'R$ 400,00',
			date: '2024-06-02',
			description: 'Recebimento do salário mensal',
			type: TransactionType.Input,
		},
		{
			id: '3',
			value: 'R$ 100,00',
			date: '2024-06-02',
			description: 'Comer puta',
			type: TransactionType.Output,
		},
	]

	return (
		<View style={{ flex: 1, padding: 24, gap: 32 }}>
			<PageHeader
				title={`In Progress #${params.id}`}
				subtite="Detalhes da tarefa em andamento"
				rightButton={{ icon: 'edit', onPress: () => {} }}
			/>

			<Progress data={detail} />

			<List
				title="Transações"
				data={[]}
				renderItem={({ item }) => (
					<Transaction data={item} onRemove={() => {}} />
				)}
				emptyMessage="Nenhuma Transação até o momento..."
			/>

			<Button
				title="Nova Transação"
				onPress={() => router.navigate(`/transaction/${params.id}`)}
			/>
		</View>
	)
}
