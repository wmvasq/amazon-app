import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/Category";
import { App } from "../models/App";

@Injectable({
    providedIn: 'root'
  })
  export class AppService {
    private apiUrl = 'http://localhost:8080/api/'; 
  
    constructor(private http: HttpClient) { }
  
    getCategorias(): Observable<Category[]> {
      return this.http.get<Category[]>(this.apiUrl+"categorias");
    }
    getApps(categoria:any): Observable<App[]> {
     // return this.http.get<App[]>(this.apiUrl+"apps");
     let url = this.apiUrl + 'apps';
    if (categoria) {
      url += `?categoria=${categoria}`;
    }
    return this.http.get<App[]>(url);
    }
  }