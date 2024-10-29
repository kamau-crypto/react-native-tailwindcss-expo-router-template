import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<View className='flex-1 items-center justify-center p-[20dp]'>
				<Text className='text-xl font-bold'>This screen doesn't exist.</Text>

				<Link
					href='/'
					className='mt-[15dp] py-[15dp]'>
					<Text className='text-sm bg-[#2e78b7]'>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
}
