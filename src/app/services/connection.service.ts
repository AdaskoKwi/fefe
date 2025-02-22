import {inject, Injectable} from '@angular/core';
import {JsonResponse} from '../model/jsonResponse.type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  http = inject(HttpClient);

  getResponseFromBE() {
    const url = `http://localhost:8080/api/connection/test`;
    return this.http.get<JsonResponse>(url);
  }

  constructor() {
  }
}
