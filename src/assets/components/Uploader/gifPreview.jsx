import React, { Component, PropTypes } from 'react';
import { createGIF } from 'gifshot';

// #here WIP move this to helper
const buildGIFFromImages = (images) => {
  return createGIF({ images, gifWidth: 200, gifHeight: 200 }, (obj) => {
    if (!obj.error) {
      const image = obj.image;
      const animatedImage = document.createElement('img');
      animatedImage.src = image;
      console.log('animatedImage: ', animatedImage);
      document.body.appendChild(animatedImage);
    }
    console.log('gif maker error: ', obj.error);
  });
};

class GIFPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      maxIndex: 0,
    };

    this.animateImages = this.animateImages.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.images.length > 0) {
      this.setState({ maxIndex: nextProps.images.length - 1 });
    }
  }

  animateImages() {
    setTimeout(() => {
      if (this.state.currentIndex === this.state.maxIndex) {
        this.setState({ currentIndex: 0 }, () => {
        });
      } else {
        this.setState({ currentIndex: this.state.currentIndex += 1 }, () => {
        });
      }
    }, 1000);

    return this.props.images[this.state.currentIndex];
  }

  render() {
    return (
      <div className="whiteText">
        <h2>Earth Rotation GIF Preview:</h2>
        {
          this.props.images.length ?
            <img className="gif-preview__image" src={this.props.images.length > 0 ? this.animateImages() : ''} alt="GIF Preview" /> :
            <p>No GIF Available</p>
        }
      </div>
    );
  }
}

GIFPreview.propTypes = {
  images: PropTypes.string.isRequired,
};

export default GIFPreview;
