import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module)
  .addWithJSX('기본', () => <Text>안녕하세요</Text>)
  .addWithJSX('large', () => <Text large>안녕하세요</Text>)
  .addWithJSX('xlarge', () => <Text xlarge>안녕하세요</Text>)
  .addWithJSX('small', () => <Text small>안녕하세요</Text>)
  .addWithJSX('xsmall', () => <Text xsmall>안녕하세요</Text>)
  .addWithJSX('primary', () => <Text primary>안녕하세요</Text>)
  .addWithJSX('secondary', () => <Text secondary>안녕하세요</Text>)
  .addWithJSX('primary/large', () => (
    <Text primary large>
      안녕하세요
    </Text>
  ));
