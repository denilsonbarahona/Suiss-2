import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  CircleMarker,
  Popup,
} from 'react-leaflet';
import * as topojson from 'topojson-client';
import { useEffect, useState } from 'react';
import hndTopoJson from './geoChart/hnd.topo.json';
import { FeatureCollection } from 'geojson';

export default function Map({
  title,
  choroplethMap,
  bubbleMap,
}: {
  title: string;
  choroplethMap?: boolean;
  bubbleMap?: boolean;
}) {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);

  useEffect(() => {
    // Convertir TopoJSON a GeoJSON
    const geoJsonData = topojson.feature(
      hndTopoJson as any,
      hndTopoJson.objects.hnd as any
    );
    setGeoData(geoJsonData as any);
  }, []);

  const getColor = (value: number) => {
    return value > 80
      ? '#800026'
      : value > 60
      ? '#BD0026'
      : value > 40
      ? '#E31A1C'
      : value > 20
      ? '#FC4E2A'
      : value > 10
      ? '#FD8D3C'
      : '#FEB24C';
  };

  const getRadius = (value: number) => {
    return value > 50
      ? 10
      : value > 30
      ? 7
      : value > 20
      ? 5
      : value > 10
      ? 4
      : 2;
  };

  const style = () => {
    return {
      fillColor: getColor(Math.random() * 100),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  return (
    <div className='h-full flex flex-col justify-between gap-4 p-3'>
      <div>
        <h1 className='text-base font-medium text-app-blue-gray-900 dark:text-slate-100'>
          {title}
        </h1>
      </div>
      <div className='w-full h-96 lg:h-full z-10'>
        <MapContainer
          className='w-full h-full rounded-3xl'
          center={[14.5, -86.241905]}
          zoom={7}
          scrollWheelZoom={true}
        >
          {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      /> */}
          <TileLayer
            url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & <a href="https://carto.com/attributions">CARTO</a>'
          />
          {choroplethMap && geoData && <GeoJSON data={geoData} style={style} />}
          {bubbleMap &&
            geoData &&
            geoData.features.map((feature, idx: number) => {
              // Verificar si el feature tiene coordenadas
              // @ts-ignore
              const { coordinates } = feature.geometry;

              let latitude, longitude;
              if (feature.geometry.type === 'Polygon') {
                // Si es un Polígono, acceder a las primeras coordenadas
                [longitude, latitude] = coordinates[0][0];
              } else if (feature.geometry.type === 'MultiPolygon') {
                // Si es un MultiPolígono, acceder a las primeras coordenadas del primer polígono
                [longitude, latitude] = coordinates[0][0][0];
              }

              // Asegurarse de que las coordenadas no sean nulas
              if (latitude && longitude) {
                return (
                  <CircleMarker
                    key={idx}
                    center={[latitude, longitude]} // Usar las coordenadas correctamente
                    radius={getRadius(Math.random() * 100)} // Tamaño del círculo
                    fillColor={getColor(Math.random() * 100)} // Color del círculo
                    color='#000'
                    weight={1}
                    opacity={1}
                    fillOpacity={0.8}
                  >
                    <Popup>
                      <div>
                        {/* @ts-ignore */}
                        <strong>{feature.properties.name}</strong>
                        <br />
                        Valor: {Math.floor(Math.random() * 100)}
                      </div>
                    </Popup>
                  </CircleMarker>
                );
              }
              return null;
            })}
        </MapContainer>
      </div>
    </div>
  );
}
