import {
	FlatList,
	FlatListProps,
	StyleProp,
	Text,
	ViewStyle,
	View,
} from 'react-native'

import { styles } from './style'

import { color } from '@/theme'
import { Separator } from '@/components/Separator'

type Props<T> = FlatListProps<T> & {
	title: string
	emptyMessage?: string
	containerStyle?: StyleProp<ViewStyle>
}

export function List<T>({
	containerStyle,
	title,
	emptyMessage,
	data,
	renderItem,
	...rest
}: Props<T>) {
	return (
		<View style={[styles.container, containerStyle]}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				data={data}
				renderItem={renderItem}
				contentContainerStyle={styles.listContent}
				ListEmptyComponent={() => (
					<Text style={styles.empty}>{emptyMessage}</Text>
				)}
				ItemSeparatorComponent={() => (
					<Separator color={color.gray[200]} />
				)}
				{...rest}
			/>
		</View>
	)
}
