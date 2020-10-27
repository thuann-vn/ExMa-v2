import * as React from 'react';
import { View, Image, SafeAreaView } from 'react-native';

import { tabbedNavigation } from '../../../../navigators/navigation';
import styles from './styles';
import { BUTTON_DEFAULT } from '../../../elements/buttons';
import LoginScreen from "react-native-login-screen";

export interface Props {
  splashLaunched: Function;
}

interface State {}

class Splash extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { splashLaunched } = this.props;
    splashLaunched();
  }

  navigateToHome = () => {
    tabbedNavigation();
  }

  render() {
    return (
      <LoginScreen/>
    );
  }
}

export default Splash;
