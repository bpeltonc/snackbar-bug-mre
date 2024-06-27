import React from "react";
import { View } from "react-native";  
import { Button, PaperProvider, Snackbar, Text } from "react-native-paper";

export default function App() {
  const [isSnackbarVisible, setIsSnackbarVisible] = React.useState(false);

  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginVertical: 50 }}> 
        <Button mode="contained" onPress={() => setIsSnackbarVisible((prev) => !prev)}>Toggle Snackbar</Button>
        <Text>Snackbar is {isSnackbarVisible ? "visible" : "hidden"}</Text>
        <Snackbar visible={isSnackbarVisible} onDismiss={() => {}}>I'm a snackbar!</Snackbar>
      </View>
    </PaperProvider>
  )
}