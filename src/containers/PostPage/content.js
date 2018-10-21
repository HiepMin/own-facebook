import React, { Component, Fragment } from 'react'
import Wrapper from './Wrapper';
import { Button } from '@material-ui/core';
import Post from './../../components/Post/index';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import * as path from './../../constants/configPath';
import firebase from './../../firebase/config';
// import moment from 'moment';
import ButtonBlock from './Button';
class PostContent extends Component {
  state = {
    Content: '',
  }
  render() {
    const { posts, auth } = this.props;
    return (
      <Wrapper>
        <ButtonBlock>
          {
            auth.uid 
              ? <Button className="btns--router btns--signout" onClick={() => firebase.auth().signOut()}>Sign Out</Button>
              : <Fragment>
                  <Button className="btns--router btns--signin" component={Link} to={path.SIGNIN}>Sign In</Button>
                  <Button className="btns--router btns--signin" component={Link} to={path.SIGNUP}>Sign Up</Button>
                </Fragment>
          }
        </ButtonBlock>
        {
          auth.uid &&
          <form onSubmit={this.handlePushStatus}>
            <div className="field--status">
              <textarea
                placeholder="Hôm nay bạn như thế nào..."
                className="field field--StatusContent"
                row="90"
                name="Content"
                onChange={this.handleChangeStatus}
                defaultValue={this.state.Content}
              />
              <Button
                color="default"
                size="small"
                variant="outlined"
                type="submit"
                className="btns--pushStatus"
              >
                <i className="fi fi-arrow-right" />
              </Button>
            </div>
          </form>
        }
        <div className="Posts">
          { this.renderPosts(posts) }
        </div>
      </Wrapper>
    )
  }
  renderPosts = posts => (
    posts.map((post, index) => {
      return (
        <Post key={index} {...post} />
      )
    })
  )
  handlePushStatus = event => {
    event.preventDefault();
    this.props.CreatePost(this.state);
  } 
  handleChangeStatus = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    })
  }
}
export default PostContent;