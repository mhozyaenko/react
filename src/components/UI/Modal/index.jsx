import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';
import '../Button';
import Button from "../Button/index";

export default class Modal extends React.PureComponent {
    static PropTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        isOpen: PropTypes.bool,
            }
    static defaultProps = {
        className: null,
        children: null,
        isOpen: false
            }
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen
        }
    }
    setOpen = () => {
        this.setState({
            isOpen: true
        })
    }
    setClose = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        const {className, children } = this.props;
        const {isOpen} = this.state;
        const cn = classNames('Modal', className, {isOpen});
        return(<div className={cn}>
            <Button onClick={this.setOpen}>Open Modal</Button>
            <div className="Modal-window">
                <div className="Modal-window-content">{children}</div>
                <Button onClick={this.setClose}>Close Modal</Button>
            </div>
            </div>)
    }
}