import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from '@/components/Themed'

export default function TabTwoScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-xl font-bold'>Tab Two</Text>
      <View className='mt-5dp h-1 w-4/5' lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <EditScreenInfo path='app/(tabs)/two.tsx' />
    </View>
  )
}
