import React, { Component } from 'react'
import Wrapper from './Wrapper';
import { Button } from '@material-ui/core';
import Post from './../../components/Post/index';
import * as path from './../../constants/configPath';
const author = {
  id: 1,
  AuthorName: "Chủ Quán Thịt Choá",
  Content: "Dạo Này Ế Quá Anh Em Eei =((",
  Like: 9090,
  linkToDetail: `${path.POST}/1`,
}
class PostContent extends Component {
  constructor(){
    super();
    this.state = {
      status: '',
    }
  }
  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handlePushStatus}>
          <div className="field--status">
            <textarea
              placeholder="Hôm nay bạn như thế nào..."
              className="field field--StatusContent"
              row="90"
              name="status"
              onChange={this.handleChangeStatus}
              defaultValue={this.state.status}
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
        <div className="Posts">
          {/* { this.renderPosts(posts) } */}
          <Post {...author}/>
        </div>
      </Wrapper>
    )
  }
  handlePushStatus = event => {
    event.preventDefault();
  }
  handleChangeStatus = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    })
  }
}
export default PostContent;