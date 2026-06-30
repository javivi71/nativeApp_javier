import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
 export class Native {
  async getLocation() {
  const position = await Geolocation.getCurrentPosition();
  return position.coords;
 }

 async guardarDato(key: string, value: string) {
  await Preferences.set({ key, value });
 }

 async obtenerDato(key: string) {
  const result = await Preferences.get({ key });
  return result.value;
 }
}
