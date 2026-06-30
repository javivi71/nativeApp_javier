import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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

async tomarFoto() {
 try {
    const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera
    });
     return image.dataUrl;
  } catch (error) {
    console.error('Error cámara:', error);
    throw error;
  }
}


}
