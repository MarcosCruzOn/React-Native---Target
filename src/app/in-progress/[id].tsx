import { View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import { PageHeader } from '@/components/PageHeader'
import { Progress } from '@/components/Progress'

export default function InProgress() {
	const params = useLocalSearchParams<{ id: string }>()

	const detail = {
		current: 'R$ 580,00',
		target: '1790,00',
		percentage: 54,
	}

	return (
		<View style={{ flex: 1, padding: 24, gap: 32 }}>
			<PageHeader
				title={`In Progress #${params.id}`}
				subtite="Detalhes da tarefa em andamento"
				rightButton={{ icon: 'edit', onPress: () => {} }}
			/>
			<Progress data={detail} />
		</View>
	)
}
