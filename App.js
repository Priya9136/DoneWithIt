import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight,Button, Alert, Platform} from 'react-native';


export default function App() {

  console.log("App executed")

  const handlePress = () => console.log("Text Pressed");
  const handleButtonPress = () => Alert.prompt("Prompt testing", "Button pressed",(text)=> console.log(text));
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color= "orange"
      title="Click Me" onPress={handleButtonPress}/>
      <Text numberOfLines={1} onPress={handlePress}>Hello Everyone!! This is my first mobile app.Write a really really really long text just by prefixing really multiple times.</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
      <Image source={{width:200,
        height:300,
        uri:"https://picsum.photos/200/300"}}/>
      </TouchableHighlight> 
 
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',

  },
});
