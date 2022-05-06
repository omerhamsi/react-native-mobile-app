/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Routers from "./screens/Routers"
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routers);
