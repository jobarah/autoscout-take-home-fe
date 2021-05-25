import axios from 'axios';
import {
  AveragePriceListing,
  Listing,
  MakePercentageListing,
  AverageBySeller
} from '../types/Listing';

const apiBasePath = 'http://localhost:4000/api/';

export async function getTopThirtyReport(): Promise<Array<AveragePriceListing>> {
  try {
    const response = await axios.get(`${apiBasePath}listings/reports/top-30-average-price`);
    
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function getDistributionByMakeReport(): Promise<Array<MakePercentageListing>> {
  try {
    const response = await axios.get(`${apiBasePath}listings/reports/distribution-by-make`);
    
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function getTopFiveContactedReport(): Promise<Array<Listing>> {
  try {
    const response = await axios.get(`${apiBasePath}listings/reports/top-5-contacted-listings`);
    
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function getAverageBySellerReport(): Promise<AverageBySeller | undefined> {
  try {
    const response = await axios.get(`${apiBasePath}listings/reports/average-by-seller`);
    
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadListings(params: FormData) {
  try {
    const response = await axios.post(`${apiBasePath}listings`, params);
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadContacts(params: FormData) {
  try {
    const response = await axios.post(`${apiBasePath}contacts`, params);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}