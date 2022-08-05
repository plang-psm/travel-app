import React from 'react';
import Fuji from '../images/Fuji.png';
import PathLogo from '../images/LocationPath.png';

function TravelList({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className='travel-container'>
      <img src={imageUrl} className='fuji-img' />
      <div className='travel-desc-container'>
        <div className='travel-location'>
          <img src={PathLogo} />
          <p className='travel-country'>{location}</p>
          <a className='travel-gmaps' href={googleMapsUrl}>
            View on Google Maps
          </a>
          {/* <p className='travel-gmaps'>View on Google Maps</p> */}
        </div>
        <p className='travel-title'>{title}</p>
        <p className='travel-date'>
          {startDate} - {endDate}
        </p>
        <p className='travel-description'>{description}</p>
      </div>
    </div>
  );
}

export default TravelList;
