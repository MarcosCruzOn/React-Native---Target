import { View, Text } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './style'
import { color } from '@/theme/colors'
import { Separator } from '../separator'
import { Summary, SummaryProps } from '../summary'

export type HomeHeaderProps = {
	total: string
	input: SummaryProps
	output: SummaryProps
}

type Props = {
	data: HomeHeaderProps
}

export function HomeHeader({ data }: Props) {
	return (
		<LinearGradient
			style={styles.container}
			colors={[color.blue[500], color.blue[800]]}
		>
			<View>
				{' '}
				<Text style={styles.label}>Total que você possues</Text>
				<Text style={styles.total}>{data.total}</Text>
			</View>
			<Separator color={color.blue[400]} />

			<View style={styles.summary}>
				<Summary
					data={data.input}
					icon={{ name: 'arrow-upward', colors: color.green[500] }}
				/>

				<Summary
					isLeft
					data={data.output}
					icon={{ name: 'arrow-downward', colors: color.red[400] }}
				/>
			</View>
		</LinearGradient>
	)
}
