import { Button, View } from 'react-native'
import { PageHeader } from '@/components/PageHeader'
import { router } from 'expo-router'

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
			<Button title="voltar" onPress={() => router.back()}></Button>
		</View>
	)
}
