import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { v4 as uuidv4 } from 'uuid';

const StyleThumbnails = ({ styles, setCurrentStyle, currentStyle }) => {
  const stylesArr = Object.entries(styles);

  const handleStyleSelect = (styleId) => {
    for (let i = 0; i < stylesArr.length; i += 1) {
      const current = stylesArr[i][1];
      if (current.style_id === styleId) {
        setCurrentStyle(current);
      }
    }
  };

  let className = 'thumbnails-img';

  return (
    <div>
      <Container className="thumbnails-cage">
        {stylesArr.map((photo) => {
          let photoUrl = '';
          const styleId = photo[1].style_id;
          const firstPhoto = photo[1];
          if (
            firstPhoto.thumbnail_url === undefined
            || firstPhoto.thumbnail_url === null
          ) {
            photoUrl = 'https://fec-image-bucket.s3-us-west-2.amazonaws.com/Coming+Soon+New+Announcement+Watercolor+Painterly+Social+Media.jpg';
          } else {
            photoUrl = firstPhoto.thumbnail_url;
          }
          if (styleId === currentStyle.style_id) {
            className = 'thumbnails-selected';
          } else {
            className = 'thumbnails-img';
          }
          return (
            <Image
              id={styleId}
              key={uuidv4()}
              className={className}
              src={photoUrl}
              alt={photo.name}
              roundedCircle
              onClick={() => {
                handleStyleSelect(styleId);
              }}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default StyleThumbnails;
