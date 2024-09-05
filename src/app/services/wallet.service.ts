import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'http://localhost:3000/wallets'; 

  constructor(private http: HttpClient) {}

  // Método para obtener una billetera específica por ID
  getWallet(walletId: string): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.apiUrl}/${walletId}`);
  }

  // Método adicional para obtener todas las billeteras
  getAllWallets(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(this.apiUrl);
  }

  // Método adicional para actualizar una billetera
  updateWallet(walletId: string, updatedWallet: Wallet): Observable<Wallet> {
    return this.http.put<Wallet>(`${this.apiUrl}/${walletId}`, updatedWallet);
  }
}
