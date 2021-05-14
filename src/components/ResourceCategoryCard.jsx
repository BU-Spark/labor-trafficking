import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ResourceCategoryCard extends Component {
  render() {
    const { title, iconURL, href, children, center } = this.props;
    return (
      <Link to={href} className="category__button">
        <div className={`col-md-6 col-sm-12 ${center && 'col-md-offset-3'}`}>
          <div className="category__card">
            <img alt={title} src={iconURL} className="category__icon" />
            <span className="category__text">{children}</span>
          </div>
        </div>
      </Link>
    );
  }
}
