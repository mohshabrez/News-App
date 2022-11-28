import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? 'https://th.bing.com/th/id/OIP.-imWb7ccVcUbt-JHUweHEwHaDt?pid=ImgDet&rs=1'
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span
                class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
                style={{ left: '90%', zIndex: '1' }}
              >
                {source}
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {' '}
                By {!author ? 'Unknown' : author} on{' '}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
