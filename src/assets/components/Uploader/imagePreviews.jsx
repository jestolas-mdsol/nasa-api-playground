import React, { PropTypes } from 'react';

import ImagePreview from './imagePreview';
import GIFPreview from './gifPreview';

const ImagePreviews = ({ imageUrls }) => (
  <div className="whiteText image-preview__container">

    <GIFPreview images={imageUrls} />

    <h2>Snapshots from Nasa&apos;s Earth Polychromatic Imaging Camera (EPIC):</h2>

    <ul className="image-preview__list--wrapper">
      {imageUrls.map(imageUrl => (<ImagePreview key={imageUrl} imageUrl={imageUrl} />))}
    </ul>
  </div>
);

ImagePreviews.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImagePreviews;
