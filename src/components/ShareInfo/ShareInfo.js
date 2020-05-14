import React from 'react';
import PropTypes from 'prop-types';
import './ShareInfo.css';
import {
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const ShareInfo = (props) => {
  // const pageUrl = String(window.location);
  const { drinkName } = props;
  const pageUrl = 'https://sleepy-einstein-34773d.netlify.app/';
  const mainText = `Learn how to make a "${drinkName}" with Cocktail Alchimia:`;
  const emailSubject = `Discover on Cocktail Alchimia: "${drinkName}"`;
  const facebookHashtag = '#cocktailalchimia';
  const twitterAccount = 'CocktailAlchimia';
  const twitterHashtag = ['drink', 'quarantine', 'partyhouse'];
  const twitterText = `Learn how to make a "${drinkName}" with the Cocktail Alchimia app:`;

  return (
    <div className="share-section">
      <div className="share-label">Click to share:</div>
      <div>
        <EmailShareButton className="share-button" url={pageUrl} subject={emailSubject} body={mainText}>
          <EmailIcon className="share-icon" round size={30} />
        </EmailShareButton>

        <WhatsappShareButton className="share-button" url={pageUrl} title={mainText}>
          <WhatsappIcon className="share-icon" round size={30} />
        </WhatsappShareButton>

        <FacebookShareButton
          className="share-button"
          url={pageUrl}
          quote={mainText}
          hashtag={facebookHashtag}
        >
          <FacebookIcon className="share-icon" round size={30} />
        </FacebookShareButton>

        <TwitterShareButton
          className="share-button"
          url={pageUrl}
          title={twitterText}
          via={twitterAccount}
          hashtags={twitterHashtag}
        >
          <TwitterIcon className="share-icon" round size={30} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

ShareInfo.propTypes = {
  drinkName: PropTypes.string.isRequired,
};


export default ShareInfo;
