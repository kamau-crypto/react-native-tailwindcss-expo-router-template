import React from 'react'

import { ExternalLink } from './ExternalLink'
import { MonoText } from './StyledText'
import { Text, View } from './Themed'

import Colors from '@/constants/Colors'

export default function EditScreenInfo({ path }: { path: string }) {
  const codeHighlightContainer = 'rounded-[3px] px-1'
  const homeScreenFilename = 'my-[7px]'
  const gettingStartedText = 'text-lg leading-6 text-center'

  return (
    <View>
      <View className='items-center mx-[50dp] '>
        <Text
          className={`${gettingStartedText}`}
          lightColor='rgba(0,0,0,0.8)'
          darkColor='rgba(255,255,255,0.8)'
        >
          Open up the code for this screen:
        </Text>

        <View
          className={`${codeHighlightContainer}${homeScreenFilename}`}
          darkColor='rgba(255,255,255,0.05)'
          lightColor='rgba(0,0,0,0.05)'
        >
          <MonoText>{path}</MonoText>
        </View>

        <Text
          className={`${gettingStartedText}`}
          lightColor='rgba(0,0,0,0.8)'
          darkColor='rgba(255,255,255,0.8)'
        >
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View className='mt-15dp mx-20dp items-center'>
        <ExternalLink
          className='py-15dp'
          href='https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
        >
          <Text className='text-center' lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  )
}
