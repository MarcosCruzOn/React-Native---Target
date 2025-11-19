import { View, Text, Button } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
// import { navigate } from 'expo-router/build/global-state/routing'

export default function Transaction() {
	const params = useLocalSearchParams<{ id: string }>()

	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Text>Transaction Page ID:{params.id} </Text>
			<Button title="Voltar" onPress={() => router.back()} />
		</View>
	)
}
