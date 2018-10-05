import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        email: '',
        password: '',
      },
    };
  }

    handleChange = ({ target: { name, value } }) => {
      this.setState(oldState => ({
        values: {
          ...oldState.values,
          [name]: value,
        },
      }));
    }

    render() {
      const { className } = this.props;
      const cn = classNames('Form', className);
      const { values: { email, password } } = this.state;
      return (
            <form action="/login" className={cn}>
                <fieldset className="Form-fieldset">
                    <input type="email" name="email" placeholder="email" value={email} onChange={this.handleChange}/>
                    <input type="password" name="password" placeholder="pass" value={password} onChange={this.handleChange}/>
                    <button type="submit">Login</button>
                </fieldset>
            </form>

      );
    }
}
