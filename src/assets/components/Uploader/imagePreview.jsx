import React, { PropTypes } from 'react';

const ImagePreview = ({ imageUrl }) => (
  <li>{imageUrl}</li>
);

ImagePreview.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ImagePreview;
