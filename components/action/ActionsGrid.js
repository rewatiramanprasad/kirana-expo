import React from 'react'
import { View } from 'react-native'
import { ActionCard } from './ActionCard.js'

// Actions Grid Component
export const ActionsGrid = ({ actions }) => (
  <View style={{paddingHorizontal:12}}>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
      }}
    >
      {actions.map((action, index) => (
        <ActionCard
          key={index}
          icon={action.icon}
          title={action.title}
          description={action.description}
          onPress={action.onPress}
          iconColor={action.iconColor}
        />
      ))}
    </View>
  </View>
)
