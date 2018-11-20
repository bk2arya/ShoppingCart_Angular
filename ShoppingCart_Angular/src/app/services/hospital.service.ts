import { Hospital } from '../models/hospitals';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HospitalService {

  constructor(private http: HttpClient) { }

  getHospitalsByCity(city: string) {
        return this.http.get<Hospital[]>('http://localhost:8083/getHospitals/' + city);
    }
  
}
