import React, { useEffect, useState } from 'react';
import { AveragePriceListing } from '../types/Listing';
import { getTopThirtyReport } from '../lib/AutoScoutClient'

export function TopThirtyReportView() {
  const [listings, setListings] = useState<Array<AveragePriceListing>>([]);

  async function seedListings() {
    const fetchedListings = await getTopThirtyReport();

    setListings(fetchedListings);
  }

  useEffect(() => {
    seedListings();
  }, [])

  return (
    <div>
      <h1>Top 30 average price</h1>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>make</th>
            <th>selling price</th> 
          </tr>
        </thead>
        <tbody>
          {
            listings.map((listing, index) => {
              return (
                <tr key={`${listing.make}-${index}-top`}>
                  <td>{listing.make}</td>
                  <td>{listing.averageSellingPrice}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}