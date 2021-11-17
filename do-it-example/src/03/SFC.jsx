import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SFC(props, contenxt) {
  // 클래스형의 this.props값과 동일
  const { somePropValue } = props;
  // 클래스형 컴포넌트의 this.context와 동일
  const { someContextValue } = contenxt;
  return <h1>Hello, {somePropValue}</h1>;
}

SFC.propTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;
