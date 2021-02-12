/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Details from "./app/pages/Details/Details";
import Home from './app/pages/Home/Home'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
