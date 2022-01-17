import React from 'react';
import s from '../Container/Container.module.scss';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
