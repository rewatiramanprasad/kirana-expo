import React, { useState } from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper'

const SearchBarComponent = ({
  placeholder = 'Search name or phone',
  onSearch,
  className,
}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query) => {
    setSearchQuery(query)
    if (onSearch) {
      onSearch(query)
    }
  }

  return (
    <View className={`px-4 py-2 bg-slate-800 ${className || ''}`}>
      <Searchbar
        placeholder={placeholder}
        onChangeText={onChangeSearch}
        value={searchQuery}
        className="bg-slate-700 rounded-lg"
        iconColor="#9CA3AF"
        placeholderTextColor="#9CA3AF"
        inputStyle={{ color: '#FFFFFF' }}
      />
    </View>
  )
}

export default SearchBarComponent
