import React from 'react';
import General from './pages/General/General';
import HotelChain from './pages/HotelChain/HotelChain';
import Address from './pages/Address/Address';
import Details from './pages/Details/Details';
import Units from './pages/Units/Units';
import Prices from './pages/Prices/Prices';
import Hours from './pages/Hours/Hours';

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
    content: <Prices />,
    key: 'units',
  },
  {
    title: 'Operational Hours',
    content: <Hours />,
    key: 'days',
  },
];
