
import { Image, StyleSheet, View} from 'react-native';
import AppButton from './app/components/AppButton';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';


export default function App() {
  console.log("App executed")
 return <ListingsScreen/>;
}
