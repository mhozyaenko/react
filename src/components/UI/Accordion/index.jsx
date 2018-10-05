import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

export default class Accordion extends React.PureComponent {
    static propTypes = {
      children: PropTypes.func.isRequired,
      defaultPanelId: PropTypes.string,
    }

    static defaultProps = {
      defaultPanelId: null,
    }

    constructor(props) {
      super(props);
      this.state = {
        currentPanelId: props.defaultPanelId,

      };
    }

    activePanel = (panelId) => {
      this.setState({
        currentPanelId: panelId,
      });
    }

    render() {
      const { children } = this.props;
      return (<div className="Accordion">{children(this.props, this.state, this.activePanel)}</div>);
    }
}
