import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';

export default function SEO(props) {
  const {title, description, siteName, twitterCard, children, favicon} = props;
  // console.log(props.children)
  const twitterImg = props.children[3].props.content.replace("https://principledgraphql.com", "http://nashtech-document.surge.sh");
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@nashtech" />
      <meta property="og:image" content={props.children[2].props.content} />
      <meta name="twitter:image" content={twitterImg} />
      <link rel="icon" href={favicon} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  twitterCard: PropTypes.string,
  children: PropTypes.node,
  favicon: PropTypes.string
};

SEO.defaultProps = {
  twitterCard: 'summary',
  favicon: 'https://www.nashtechglobal.com/wp-content/themes/nashtech/favicon.png'
};
