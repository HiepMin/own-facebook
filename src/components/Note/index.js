import React from 'react';
import { Link } from 'react-router-dom';
export default ({ className, style, text, path }) => (
  <div className={className} style={style}>
    <h4>
      {text}{' '}
      <Link to={path} style={{ fontSize: '13px' }}>
        Đây
      </Link>
    </h4>
  </div>
);
