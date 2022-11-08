import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  public api: 'https://dummyjson.com/users/add';

  constructor(
    private  http: HttpClient
  ) {

   }
}
