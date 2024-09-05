import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountTypeService {
  private apiUrl = 'http://localhost:3000/accountTypes'; // URL del endpoint de tipos de cuenta

  constructor(private http: HttpClient) {}

  getAccountTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
