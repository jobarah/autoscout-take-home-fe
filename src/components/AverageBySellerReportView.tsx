import React, { useEffect, useState } from 'react';
import { getAverageBySellerReport } from '../lib/AutoScoutClient'
import { AverageBySeller } from '../types/Listing'

export function AverageBySellerReportView(): JSX.Element {

  const [listings, setListings] = useState<AverageBySeller>();

  async function seedListings() {
    const fetchedListings = await getAverageBySellerReport();

    setListings(fetchedListings);
  }

  useEffect(() => {
    seedListings();
  }, [])

  return (
    <div>
      <h1>Average by Seller</h1>
      <div>private: {listings?.private}</div>
      <div>dealer: {listings?.dealer}</div>
      <div>other: {listings?.other}</div>
    </div>
  );
}
