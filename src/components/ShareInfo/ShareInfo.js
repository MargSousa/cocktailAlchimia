import React from 'react';
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

const ShareInfo = () => {
  //const pageUrl = String(window.location);
  const pageUrl = `www.cocktailAlchimia.com/`;
  const mainText = `Check out this drink information:`;
  const emailSubject = `Explore the CocktailAlchimia`;
  const facebookHashtag = `#cocktailalchimia`;
  const twitterAccount = `CocktailAlchimia`;
  const twitterHashtag = [`drink`, `quarantine`, `partyhouse`];
  const twitterText = `Check out this drink information: ${pageUrl}`;

  return (
    <div className="share-section">
      <div className="share-label">Click to share:</div>
      <div>
        <EmailShareButton url={pageUrl} subject={emailSubject} body={mainText}>
          <EmailIcon className="share-icon" round={true} size={30} />
        </EmailShareButton>

        <WhatsappShareButton url={pageUrl} title={mainText}>
          <WhatsappIcon className="share-icon" round={true} size={30} />
        </WhatsappShareButton>

        <FacebookShareButton
          url={pageUrl}
          quote={mainText}
          hashtag={facebookHashtag}
        >
          <FacebookIcon className="share-icon" round={true} size={30} />
        </FacebookShareButton>

        <TwitterShareButton
          url={pageUrl}
          title={twitterText}
          via={twitterAccount}
          hashtags={twitterHashtag}
        >
          <TwitterIcon className="share-icon" round={true} size={30} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default ShareInfo;
