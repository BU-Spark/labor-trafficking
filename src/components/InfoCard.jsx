import React, { Component } from 'react';

export default class InfoCard extends Component {
  render() {
    const { title, url } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div className="info__card">
          <p>{title}</p>
          <a href={url} target="_blank" rel="noopener">
            {url}
          </a>
        </div>
      </div>
    );
  }
}
