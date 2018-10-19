import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
const Post = ({ AuthorName, Content, Like, AuthorAvatar, linkToDetail }) => (
  <div className="post post--white">
    <div className="post__info">
      <div className="authorDesc">
        <div className="authorDesc__Avatar">
          {!AuthorAvatar && (
            <img
              src="https://images.pexels.com/photos/316163/pexels-photo-316163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
            />
          )}
          {typeof AuthorAvatar === 'string' &&
            AuthorAvatar.trim() !== '' && <img src={AuthorAvatar} alt="" />}
        </div>
        <div className="authorDesc__NameDate">  
          <Link className="authorName" to={linkToDetail}>
            <strong>{AuthorName}</strong>
          </Link>
          <div className="date">14h trước</div>
        </div>
      </div>
      <div className="operate">
        <IconButton color="primary" className="btnLike" variant="outlined">
          <i className="fi fi-like" />
        </IconButton>
      </div>
    </div>
    <div className="post__content">
      <p className="post__main">{Content}</p>
    </div>
    <div className="post__desc">
      <div className="post__desc--amountLike oneBlockDesc">
        <span>{Like}</span>
        Lượt thích
      </div>
    </div>
  </div>
);
Post.propTypes = {
  AuthorName: PropTypes.string,
  Content: PropTypes.string,
  Like: PropTypes.number,
  AuthorAvatar: PropTypes.string,
  linkToDetail: PropTypes.string,
};
export default Post;
