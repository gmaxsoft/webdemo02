"use client"

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Marker from '@/components/Marker';

const containerStyle = {
  width: '100%',
  height: '550px'
};

const center = {
  lat: 51.941983,
  lng: 15.505286
};


function GoogleMapTag() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBQSEaJpTUx3J-lH-s9LJU3AgxAFTKuq5s"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
   
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      <Marker lat={center.lat} lng={center.lng} />
      <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapTag)