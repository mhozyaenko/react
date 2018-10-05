import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Icon = ({ className, name }) => {
  const cn = classNames('fas', className, `fa-${name}`);
  return <i className ={cn} />;
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,

};
Icon.defaultProps = {
  className: null,
};
export default Icon;
