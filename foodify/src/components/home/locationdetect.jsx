import React, { useState } from 'react';

const LocationDetect = ({ onLocationChange }) => {
  const [location, setLocation] = useState('');
  const [isLocationDetected, setIsLocationDetected] = useState(false); // State to track location detection

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationString = `Lat: ${latitude}, Lon: ${longitude}`; // This would be replaced with a proper address format
          setLocation(locationString);
          setIsLocationDetected(true); // Set to true when location is successfully detected
          onLocationChange(locationString);
        },
        (error) => {
          console.error('Error detecting location: ', error);
          setLocation('Unable to detect location');
          setIsLocationDetected(false);
          onLocationChange('Unable to detect location');
        }
      );
    } else {
      setLocation('Geolocation is not supported by your browser');
      setIsLocationDetected(false);
      onLocationChange('Geolocation is not supported by your browser');
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center space-y-2">
      <button
        onClick={handleLocationDetect}
        className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
      >
        Detect Location
      </button>

      {/* Only show manual input if location is detected or if user chooses to manually enter the address */}
      {isLocationDetected ? (
        <div className="mt-4 text-gray-700">
          <p>Your location is detected: {location}</p>
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your location manually"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              onLocationChange(e.target.value);
            }}
            className="w-full max-w-md px-4 py-2 rounded-lg text-gray-800 focus:outline-none mt-2"
          />
          <p className="mt-2 text-sm text-gray-600">
            Or enter your location manually for delivery.
          </p>
        </>
      )}
    </div>
  );
};

export default LocationDetect;
