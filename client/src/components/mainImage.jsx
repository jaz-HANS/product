import React, { useCallback, useState } from 'react';
import Slider from 'react-slick';
import ControlledZoom from 'react-medium-image-zoom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const MainImage = ({ currentStyle }) => {
  const photoArr = currentStyle.photos;
  const [nav1, setSlider1] = useState({});
  const [nav2, setSlider2] = useState({});
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true);
  }, []);
  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <div>
      <Slider
        infinite={false}
        draggable
        dots
        accessibility
        className="main-carousel"
        asNavFor={nav2}
        ref={(slider) => (setSlider1(slider))}
      >
        {!!photoArr && photoArr.map((photo) => {
          let photoUrl = '';
          if (photo.url === null) {
            photoUrl = 'https://fec-image-bucket.s3-us-west-2.amazonaws.com/Coming+Soon+New+Announcement+Watercolor+Painterly+Social+Media.jpg';
          } else {
            photoUrl = photo.url;
          }
          return (
            <div key={uuidv4()}>
              <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange} closeText="Unzoom Image" openText="Zoom Image" zoomZindex="1" zoomMargin={20}>
                <img
                  className="main-img"
                  src={photoUrl}
                  alt={photo.name}
                  onLoad={handleImgLoad}
                />
              </ControlledZoom>
            </div>
          );
        })}
      </Slider>
      <Slider
        infinite={false}
        draggable
        accessibility
        className="thumbnail-carousel"
        asNavFor={nav1}
        ref={(slider) => (setSlider2(slider))}
        slidesToShow={3}
        swipeToSlide
        focusOnSelect
      >
        {!!photoArr && photoArr.map((photo) => {
          let photoUrl = '';
          if (photo.thumbnail_url === null) {
            photoUrl = 'https://fec-image-bucket.s3-us-west-2.amazonaws.com/Coming+Soon+New+Announcement+Watercolor+Painterly+Social+Media.jpg';
          } else {
            photoUrl = photo.thumbnail_url;
          }
          return (
            <div key={uuidv4()}>
              <img
                className="thumbnail-img"
                src={photoUrl}
                alt={photo.name}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MainImage;
