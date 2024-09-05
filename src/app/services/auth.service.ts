import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; 
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // Cambiado a la URL del endpoint de usuarios

  constructor(private http: HttpClient) {}

  // Método para obtener usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener los usuarios:', error);
        return throwError(() => new Error('No se pudo cargar los usuarios'));
      })
    );
  }

  // Método para validar las credenciales
  validateUser(username: string, password: string): Observable<User | undefined> {
    return this.getUsers().pipe(
      map((users: User[]) => 
        users.find(user => (user.username === username || user.email == username)  && user.password === password)
      )
    );
  }
}
