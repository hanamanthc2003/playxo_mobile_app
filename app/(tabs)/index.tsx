import { View, Image, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://playxo.app/" }}
        javaScriptEnabled
        domStorageEnabled
        onLoadEnd={() => setLoading(false)}
        style={{ flex: 1 }}
      />

      {loading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require(("../../assets/images/icon.png"))}
            style={{ width: 120, height: 120 }}
            resizeMode="contain"
          />
          <ActivityIndicator
            size="large"
            style={{ marginTop: 20 }}
          />
        </View>
      )}
    </View>
  );
}