import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Api {
  async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
       throw new Error('Error API');
    }
    return await response.json();
  }
}
