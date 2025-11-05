import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
} from 'react-native'
import { Icon } from 'react-native-paper'
import SearchBar from '../components/contact/Searchbar'
import ScreenHeader from '../components/contact/ScreenHeader'
import ContactCard from '../components/contact/ContactCard'
import FooterNote from '../components/contact/FooterNote'


// Empty State Component
const EmptyState = ({ message }) => (
  <View className="flex-1 items-center justify-center px-8 py-12">
    <Icon source="account-search" size={64} color="#9AA8B2" />
    <Text className="text-mutedText text-center mt-4">{message}</Text>
  </View>
)


// Main Due Contacts Screen
const Contact = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const contacts = [
    {
      id: 1,
      name: 'Anita Verma',
      phone: '+91 98765 43210',
      email: 'anita@example.com',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      phone: '+91 90111 22334',
      email: 'priyaSingh@gmail.com',
      avatar: 'https://i.pravatar.cc/150?img=20',
    },
    {
      id: 3,
      name: 'Aman Gupta',
      phone: '+91 98650 11422',
      email: 'aman-g@infa.co',
      avatar: 'https://i.pravatar.cc/150?img=30',
    },
    {
      id: 4,
      name: 'Suresh Kumar',
      phone: '+91 94444 88877',
      email: null,
      avatar: 'https://i.pravatar.cc/150?img=40',
    },
    {
      id: 5,
      name: 'Anita Verma',
      phone: '+91 98765 43210',
      email: 'anita@example.com',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    {
      id: 6,
      name: 'Priya Sharma',
      phone: '+91 90111 22334',
      email: 'priyaSingh@gmail.com',
      avatar: 'https://i.pravatar.cc/150?img=20',
    },
    {
      id: 7,
      name: 'Aman Gupta',
      phone: '+91 98650 11422',
      email: 'aman-g@infa.co',
      avatar: 'https://i.pravatar.cc/150?img=30',
    },
    {
      id: 8,
      name: 'Suresh Kumar',
      phone: '+91 94444 88877',
      email: null,
      avatar: 'https://i.pravatar.cc/150?img=40',
    },
  ]

  const handleContactPress = (contact) => {
    console.log('Contact pressed:', contact.name)
  }

  const handleCopyPhone = (phone) => {
    console.log('Copy phone:', phone)
    // In real app: Clipboard.setString(phone);
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery)
  )

  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <ScreenHeader title="Due Contacts" />

      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search due contacts"
      />

      {/* Contacts List */}
      <ScrollView className="flex-1">
        {filteredContacts.length > 0 ? (
          <>
            {filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                avatarUri={contact.avatar}
                onPress={() => handleContactPress(contact)}
                onCopyPhone={() => handleCopyPhone(contact.phone)}
              />
            ))}
            <FooterNote text="Long-press a contact row to copy Name - Phone" />
          </>
        ) : (
          <EmptyState message="No contacts found matching your search" />
        )}
      </ScrollView>
    </View>
  )
}

export default Contact