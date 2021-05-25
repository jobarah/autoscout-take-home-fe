import React, { useEffect, useState } from 'react';
import { Listing } from '../types/Listing';
import { getTopFiveContactedReport } from '../lib/AutoScoutClient'

export function TopFiveListingsReportView() {
  const [listings, setListings] = useState<Array<Listing>>([]);

  async function seedListings() {
    const fetchedListings = await getTopFiveContactedReport();

    setListings(fetchedListings);
  }

  useEffect(() => {
    seedListings();
  }, [])

  return (
    <div>
      <h1>Top 5 Contacted Listings</h1>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>make</th>
            <th>selling price</th> 
            <th>mileage</th>
            <th>total amount of contacts</th>
            <th>seller type</th>
          </tr>
        </thead>
        <tbody>
          {
            listings.map((listing, index) => {
              return (
                <tr key={`${listing.make}-${index}-top-listings`}>
                  <td>{listing.make}</td>
                  <td>{listing.sellingPrice}</td>
                  <td>{listing.mileage}</td>
                  <td>{listing.totalAmountOfContacts}</td>
                  <td>{listing.sellerType} </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}