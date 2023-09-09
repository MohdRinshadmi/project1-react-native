/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import Flexbox from './src/flexbox';

AppRegistry.registerComponent(appName, () => App);
