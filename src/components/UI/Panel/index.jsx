import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';
import '../Icon';

const Panel = ({
  className, isOpen, title, children, toggleOpen, id,
}) => {
  const cn = classNames('Panel', className, { isOpen });
  const icon = (isOpen) ? 'minus' : 'plus';
  return (<div className={cn}>
        <div className="Panel-title" onClick={() => toggleOpen(id)}>
            <div className="Panel-titleText">{title}</div>
            <div className="Panel-titleIcon"><Icon name={icon} /></div>
        </div>
        <div className="Panel-content">{children}</div>
    </div>);
};
Panel.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  toggleOpen: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
Panel.defaultProps = {
  className: null,
  isOpen: false,
  title: '',
  children: null,
};

export default Panel;
