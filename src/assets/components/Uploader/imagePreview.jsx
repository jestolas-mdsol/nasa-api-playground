import React, { PropTypes } from 'react';

const ImagePreview = ({ imageUrl }) => (
  <li className="image-preview__list--item">
    <img className="image-preview__picture" src={imageUrl} alt="Earth Snapshot" />
  </li>
);

ImagePreview.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ImagePreview;
