import React, { useEffect } from 'react';
import { Banner } from '../Banner/Banner';
import { ClientReviews } from './ClientReviews/ClientReviews';
import { ImportandOfSansa } from './ImportandOfSansa/ImportandOfSansa';
import { SensaInfo } from './SensaInfo/SensaInfo';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <SensaInfo />
      <ClientReviews />
      <ImportandOfSansa />
    </div>
  );
}

