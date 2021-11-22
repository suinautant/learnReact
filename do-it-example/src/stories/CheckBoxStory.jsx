import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckBox from '../04/CheckBox';
import Text from '../04/Text';

storiesOf('CheckBox', module)
  .addWithJSX('default', () => <CheckBox name="agree" />)
  .addWithJSX('children', () => (
    <CheckBox name="agree">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('label', () => (
    <CheckBox name="agree" label="이름">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('onChange', () => (
    <CheckBox name="agree" onChange={action('onChage 이벤트 발생')}>
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('checked', () => (
    <CheckBox name="agree" label="이름" checked>
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('errorMessage', () => (
    <CheckBox name="agree" label="이름" errorMessage="동의가 필요합니다">
      <Text>동의합니다</Text>
    </CheckBox>
  ))
  .addWithJSX('autoFocus', () => (
    <CheckBox name="agree" label="이름" autoFocus>
      <Text>동의합니다</Text>
    </CheckBox>
  ));
