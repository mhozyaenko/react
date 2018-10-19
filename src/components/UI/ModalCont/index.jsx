import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';
import '../Button';
import '../Modal';
import Button from "../Button";
import Modal from "../Modal";

export default class ModalCont extends React.PureComponent {
   constructor(props) {
       super(props);
       this.state = {
           modalOpen: false,
       }
   };
   openModal = () => {
       this.setState({
           modalOpen: true,
       });
};
   closeModal = () => {
       this.setState({
           modalOpen: false,
       })
   }
   render() {
       const {children} = this.props;
       return (
           <div className="ModalCont">
               <Button onClick={this.openModal}>Show Modal</Button>
               <Modal isOpen={this.state.modalOpen}>
                   <h2>Some Content</h2>
                   <Button onClick={this.closeModal}>Close Modal</Button>
               </Modal>
           </div>
       )
   }
};