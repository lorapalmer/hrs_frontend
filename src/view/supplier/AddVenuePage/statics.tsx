import React from 'react';
import General from './components/General/General';
import HotelChain from './components/HotelChain/HotelChain';
import Address from './components/Address/Address';
import Details from './components/Details/Details';
import Units from './components/Units/Units';

interface IStepDescription {
  title: string;
  content: JSX.Element | string;
  key: string;
}

export const stepsList: IStepDescription[] = [
  {
    title: 'General',
    content: <General />,
    key: 'general',
  },
  {
    title: 'Hotel Chain',
    content: <HotelChain />,
    key: 'hotelChain',
  },
  {
    title: 'Address',
    content: <Address />,
    key: 'address',
  },
  {
    title: 'Contact Details',
    content: <Details />,
    key: 'details',
  },
  {
    title: 'Units',
    content: <Units />,
    key: 'units',
  },
  {
    title: 'Prices',
    content: 'Sixth-content',
    key: 'prices',
  },
  {
    title: 'Operational Hours',
    content: 'Seventh-content',
    key: 'hours',
  },
];
