/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// * EStyleSheet Config
import colors from './src/assets/themes/colors';
import { width } from './src/public/helper/GlobalHelper';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $rem: width / 380,
    ...colors
})

AppRegistry.registerComponent(appName, () => App);
