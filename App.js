/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

// const isDarkMode = useColorScheme() === 'dark';

// const backgroundStyle = {
//   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// };

// let routerName = '';

// const onMessage = event => {
//   let messageData = event.nativeEvent.data;
//   // console.log('***messageData', messageData);
//   messageData = JSON.parse(messageData);
//   routerName = messageData.routeName;
//   console.log('***routerName', routerName);
// };

class App extends Component {
  state = {
    routerName: '',
    barStyle: 'light-content',
    isDark: false,
  };

  onMessage(event) {
    let messageData = event.nativeEvent.data;
    // console.log('***messageData', messageData);
    messageData = JSON.parse(messageData);
    let routerName = messageData.routeName;
    console.log('***routerName', routerName);
    this.setState({routerName});
    const isDark = ['SignIn', 'SignUp'].includes(routerName);
    this.setState({isDark});
  }

  render() {
    const {isDark} = this.state;
    // const uri = 'file:///android_asset/dist/index.html';
    // 2979ff
    const uri = 'http://42.194.207.119/';
    return (
      <View style={{width: '100%', flex: 1, backgroundColor: 'blue'}}>
        <StatusBar
          backgroundColor={isDark ? '#ffffff' : '#2979ff'}
          barStyle={isDark ? 'dark-content' : 'light-content'}
          translucent={false}></StatusBar>
        {/* <WebView source={{uri: 'http://192.168.5.122:8080'}} /> */}
        {/* <WebView source={{uri: 'http://42.194.207.119/'}} /> */}
        {/* <WebView
          source={{uri: 'file:///android_asset/static.bundle/index.html'}}
          originWhitelist={['*']}
        /> */}
        <WebView
          source={{uri}}
          originWhitelist={['*']}
          onMessage={this.onMessage.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
