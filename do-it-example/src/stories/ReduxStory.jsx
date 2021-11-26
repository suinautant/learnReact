import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../07/ReduxApp01';
import ReduxApp02 from '../07/ReduxApp02';

storiesOf('Redux', module)
  .addWithJSX('app01', () => <ReduxApp01>리덕스 예제</ReduxApp01>)
  .addWithJSX('app02', () => <ReduxApp02>리덕스 예제</ReduxApp02>);
