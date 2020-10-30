import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  EmailIcon,
} from 'react-share';
import PropTypes from 'prop-types';

const SocialShare = ({ product, currentStyle, styles }) => {
  let productName;
  if (product === undefined || product.name === undefined) {
    productName = 'new product';
  } else {
    productName = product.name;
  }
  let styleName;
  if (currentStyle === undefined || currentStyle.name === undefined) {
    styleName = 'new style';
  } else {
    styleName = currentStyle.name;
  }
  let imageURL;
  if (
    styles === undefined
    || styles[0] === undefined
    || styles[0].photos[0] === undefined
    || styles[0].photos[0].url === undefined
  ) {
    imageURL = 'https://fec-image-bucket.s3-us-west-2.amazonaws.com/Coming+Soon+New+Announcement+Watercolor+Painterly+Social+Media.jpg';
  } else {
    imageURL = styles[0].photos[0].url;
  }
  const body = `Check out ${productName} in ${styleName} from The Proto Company!`;
  const subject = `${productName} in ${styleName} from The Proto Co.`;
  return (
    <div>
      <TwitterShareButton
        className="social-spacing"
        title={body}
        via="TheProtoCompany"
        hashtags={['TheProtoCo', 'MyProto']}
        url="protoco.com"
      >
        <TwitterIcon size={24} round />
      </TwitterShareButton>
      <FacebookShareButton
        className="social-spacing"
        quote={body}
        hashtag="TheProtoCo"
        url={imageURL}
      >
        <FacebookIcon size={24} round />
      </FacebookShareButton>
      <PinterestShareButton
        className="social-spacing"
        media={imageURL}
        description={body}
        url="protoco.com"
      >
        <PinterestIcon size={24} round />
      </PinterestShareButton>
      <EmailShareButton
        className="social-spacing"
        subject={subject}
        body={body}
        url={imageURL}
      >
        <EmailIcon size={24} round />
      </EmailShareButton>
    </div>
  );
};

export default SocialShare;
