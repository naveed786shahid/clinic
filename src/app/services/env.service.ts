import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://chamakcraft.com/v1/';
  BASE_URL = 'https://chamakcraft.com/';
  
  constructor() { }
}