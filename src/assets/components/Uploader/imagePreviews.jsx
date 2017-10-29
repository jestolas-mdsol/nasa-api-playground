import React, { PropTypes } from 'react';

import ImagePreview from './imagePreview';

const ImagePreviews = ({ imageUrls }) => (
  <div className="whiteText">
    <h4>These are the image urls:</h4>
    <ul>
      {imageUrls.map(imageUrl => (<ImagePreview key={imageUrl} imageUrl={imageUrl} />))}
    </ul>
  </div>
);

ImagePreviews.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImagePreviews;
