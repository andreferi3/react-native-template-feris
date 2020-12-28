import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';

import FlashMessage from 'react-native-flash-message';
import AppContainer from './routes';

import CodePush, {DownloadProgress} from 'react-native-code-push';
import {codePushOptions} from './public/config/CodePushConfig';
import {Root} from 'native-base';
import {firebaseNotificationListener} from './public/config/NotificationConfig';

interface IProps {}

interface IState {
  totalDownload: number;
  byteReceived: number;
  progress: number;
}

class App extends Component<IProps, IState> {
  private notificationListener: any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      totalDownload: 0,
      byteReceived: 0,
      progress: 0,
    };
  }

  codePushDownloadDidProgress(progress: DownloadProgress) {
    this.setState(
      {
        totalDownload: progress.totalBytes,
        byteReceived: progress.receivedBytes,
      },
      () => this.countProgress(),
    );
  }

  codePushStatusDidChange(status: any) {
    switch (status) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Check app update...');
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Downloading Package');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update app');
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update app successfully installed');
      case CodePush.SyncStatus.UP_TO_DATE:
        console.log('Your app is updated');
        break;
      default:
        console.log('Your app is up to-date');
        break;
    }
  }

  async componentDidMount() {
    SplashScreen.hide();
    await this.createNotificationListeners();
  }

  componentWillUnmount() {
    this.notificationListener();
  }

  async createNotificationListeners() {
    this.notificationListener = firebaseNotificationListener();
  }

  countProgress() {
    const {totalDownload, byteReceived} = this.state;
    const divide = byteReceived / totalDownload;
    this.setState({progress: Number(divide.toFixed(2))});
  }

  render() {
    // const { totalDownload, byteReceived, progress } = this.state;

    return (
      <Root>
        <AppContainer />
        <FlashMessage position="top" />
      </Root>
    );
  }
}

export default CodePush(codePushOptions)(App);
