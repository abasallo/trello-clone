import React from 'react'

import { GoogleMap, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width: '400px',
  height: '400px'
}

const center = {
  lat: -3.745,
  lng: -38.523
}

const CellMaps = () => {
  const [, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  return (
    <LoadScript googleMapsApiKey="AIzaSyBodYz_jRrk9jQCa9tcwEn1C6VDVxRklRs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(CellMaps)
