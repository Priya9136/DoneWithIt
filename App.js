
import { Image, StyleSheet, View} from 'react-native';
import AppButton from './app/components/AppButton';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppPicker from './app/components/AppPicker';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import { useState } from 'react';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category , setCategory] = useState();
  console.log("App executed")
 return (
   <Screen>
     <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
     <AppTextInput icon="email" placeholder="Email" />
   </Screen>
 );
}
