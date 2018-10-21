import React, { Component } from 'react';
import Wrapper from './Wrapper';
import { Redirect } from 'react-router-dom';
import InputField from './../../components/InputField/index';
import { Button } from '@material-ui/core';
import { Field } from 'redux-form';
import { Required, EmailFormat } from './../../components/Validate/index';
import TitleForm from './../../components/TitleForm/index';
import Note from './../../components/Note/index';
import * as path from './../../constants/configPath';
import firebase from './../../firebase/config';

class SignUpContent extends Component {
  render() {
    const { handleSubmit, submitting, auth } = this.props;
    if (auth.uid) return <Redirect to={path.HOME} />
    console.log(this.props);
    return (
      <Wrapper>
        <form
          onSubmit={handleSubmit(this.submitForm)}
          className="form--signup"
        >
          <TitleForm className="Title" text="Đăng Kí" />
          <Field
            formGroupClass="formGroupClass"
            component={InputField}
            type="text"
            name="username"
            placeholder="Username"
            className="field field--username"
            validate={[Required]}
          />
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
            type="password"
            name="password"
            placeholder="Password"
            className="field field--password"
            validate={[Required]}
          />
          <Field
            formGroupClass="formGroupClass"
            component={InputField}
            type="password"
            name="ConfirmPassword"
            placeholder="Cofirm Password"
            className="field field--password"
          />
          <Button
            color="default"
            className="btns btn--signup"
            type="submit"
            disabled={submitting}
          >
            <i className="fi fi-arrow-right" />
          </Button>
          <Note
            className="Title"
            style={{ fontSize: '11px', marginTop: '20px' }}
            text="Thí Chủ Đã Có Tài Khoản Thì Xin Đăng Nhập Ở"
            path={path.SIGNIN}
          />
        </form>
      </Wrapper>
    );
  }
  submitForm = credentials => {
    firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(user => {
        firebase.firestore().collection('users').doc(user.user.uid).set({
          username: credentials.username,
        })
        .then(() => {
          firebase.auth().signOut();
        })
        .catch(err => console.log(err))
      })  
      .catch(err => console.log(err))
  }
}
export default SignUpContent;