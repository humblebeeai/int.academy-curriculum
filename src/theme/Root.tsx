import React from 'react';
import Head from '@docusaurus/Head';
import type { Props } from '@theme/Root';

// Default implementation, that you can customize
export default function Root({children}: Props): JSX.Element {
  return (
    <>
      <Head>
        {/* Favicon links for better browser support */}
        <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="manifest" href="/img/site.webmanifest" />
      </Head>
      {children}
    </>
  );
}
