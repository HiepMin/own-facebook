import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Field } from 'redux-form';
import Wrapper from './Wrapper';
import InputField from './../../components/InputField/index';
import { Required, EmailFormat } from './../../components/Validate/index';
import * as path from './../../constants/configPath';
class SignInContent extends Component {
  render(){
    const { handleSubmit, submitting, auth } = this.props;
    if (auth.uid) return <Redirect to={path.HOME} />
    return (
      <Wrapper>
        <form onSubmit={handleSubmit(this.submitForm)} className="form form--login">
          <div className="Title">
            <h3>Đăng Nhập</h3>
          </div>
          <Field
            formGroupClass="formGroupClass"
            component={InputField}
            type="text"
            name="email"
            placeholder="Email"
            className="field field--email"
            validate={[Required, EmailFormat]}
          />
          <Field
            formGroupClass="formGroupClass"
            component={InputField}
            className="field field--password"
            type="password"
            name="password"
            validate={[Required]}
            placeholder="Password"
          />
          <Button
            color="default"
            className="btns btn--login"
            type="submit"
            disabled={submitting}
          >
            <i className="fi fi-arrow-right" />
          </Button>
          <div className="loginBy">
            <Button className="btns btn__icon">
              <i className="fi fi-facebook" />
            </Button>
            <Button className="btns btn__icon">
              <i className="fi fi-instagram" />
            </Button>
          </div>
          <div
            className="Title"
            style={{ fontSize: '11px', marginTop: '20px' }}
          >
            <h4>
              Thí Chủ Chưa Có Tài Khoản Thì Xin Đăng Ký Ở{' '}
              <Link to={path.SIGNUP} style={{ fontSize: '13px' }}>
                Đây
              </Link>
            </h4>
          </div>
        </form>
      </Wrapper>
    )
  }  
  submitForm = user => {
    this.props.Login(user);
  } 
}
SignInContent.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
}
export default SignInContent;