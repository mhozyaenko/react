import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Modal = ({ className, isOpen, children}) => {
  const cn = classNames('Modal', { isOpen }, className);
  return (<div className={cn}>
             {children}
          </div>);
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  className: null,
  children: null,
  isOpen: false,
  };
export default Modal;
