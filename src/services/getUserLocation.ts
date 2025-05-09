import type { GeoPosition } from '@/model/GeoPosition';

export default function getLocation(): Promise<GeoPosition> {
     return new Promise((resolve, reject) => {
          if (!navigator.geolocation) {
               reject(new Error('Geolocalização não suportada!'));
          }

          navigator.geolocation.getCurrentPosition(
               (position) => {
                    resolve({
                         lat: position.coords.latitude,
                         lon: position.coords.longitude
                    });
               },
               (error) => {
                    reject(error);
               }
          );
     });
}
