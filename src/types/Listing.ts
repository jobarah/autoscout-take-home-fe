export type SellerType = 'private' | 'dealer' | 'other';

export interface Listing {
  id: string,
  make: string,
  sellingPrice: number,
  mileage: number,
  totalAmountOfContacts: number,
  sellerType: SellerType
}

export interface AveragePriceListing {
  make: string,
  averageSellingPrice: number,
}

export interface MakePercentageListing {
  make: string,
  percentage: number,
}

export type AverageBySeller = Record<SellerType, string>;