import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function Map({ title }: { title: string }) {
  return (
    <div className='h-full flex flex-col justify-between gap-4 p-3'>
      <div>
        <h1 className='text-base font-medium text-app-blue-gray-900 dark:text-slate-100'>{title}</h1>
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
        </MapContainer>
      </div>
    </div>
  );
}
