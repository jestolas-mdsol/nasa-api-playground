import React, { PropTypes } from 'react';
import Iframe from 'react-iframe';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const APODCard = ({ astronomyPictureOfTheDay, apodTitle, apodDescription }) => (
  <Card className="apod__card">
    <CardMedia
      overlay={<CardTitle title={apodTitle} />}
    >
      {
        astronomyPictureOfTheDay.includes('.youtube') ?
          <Iframe
            className="iframe"
            url={astronomyPictureOfTheDay}
            position="relative"
            width="560px"
            height="315px"
          /> :
          <img src={astronomyPictureOfTheDay} alt="Astronomy" />
      }
    </CardMedia>
    <CardText>{apodDescription}</CardText>
  </Card>
);

APODCard.propTypes = {
  astronomyPictureOfTheDay: PropTypes.string.isRequired,
  apodTitle: PropTypes.string.isRequired,
  apodDescription: PropTypes.string.isRequired,
};

export default APODCard;
