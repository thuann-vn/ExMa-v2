import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

export interface Props {}

interface State {}

class Settings extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <StickyParallaxHeader headerType="TabbedHeader" />
    );
  }
}

export default Settings;
