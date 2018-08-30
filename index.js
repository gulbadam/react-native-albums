/** @format */
import React from "react";
import {
    Text,
    AppRegistry,
    View,
    WebView,
    StyleSheet
} from 'react-native';
import Header from "./src/components/header";
const App = () =>  (
<Header headerText={'Albums'}/>
);

AppRegistry.registerComponent('albums', () => App);

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
