import React, { useEffect, useState } from 'react';
import { MakePercentageListing } from '../types/Listing';
import { getDistributionByMakeReport } from '../lib/AutoScoutClient'

export function DistributionByMakeReportView() {
  const [listings, setListings] = useState<Array<MakePercentageListing>>([]);

  async function seedListings() {
    const fetchedListings = await getDistributionByMakeReport();

    setListings(fetchedListings);
  }

  useEffect(() => {
    seedListings();
  }, [])

  return (
    <div>
      <h1>Distribution by Make</h1>
      {
        listings.map((listing, index) => {
          return <p key={`${listing.make}-${index}-dist`}>make: {listing.make}, Percentage: {listing.percentage}%</p>
        })
      }
    </div>
  );
}