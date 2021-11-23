import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withHoC from '../05/withHoC';

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('WithHoC', module)
  .addWithJSX('default', () => (
    <div>
      <ButtonWithHoC>안녕하세요</ButtonWithHoC>
      <TextWithHoC>안녕하세요</TextWithHoC>
    </div>
  ))
  .addWithJSX('large', () => (
    <div>
      <ButtonWithHoC large>안녕하세요</ButtonWithHoC>
      <TextWithHoC large>안녕하세요</TextWithHoC>
    </div>
  ));
