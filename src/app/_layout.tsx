import { Stack } from 'expo-router'

import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
	Inter_700Bold,
} from '@expo-google-fonts/inter'

import { color } from '@/theme/colors'

import { Loading } from '@/app/components/Loading'

export default function Layout() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_700Bold,
	})
	if (!fontsLoaded) {
		return <Loading />
	}

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: color.white,
				},
			}}
		/>
	)
}
