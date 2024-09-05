import { Component, OnInit } from '@angular/core';
import { Wallet, Coin } from '../../models/wallet.model';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallet!: Wallet;
  currentView: string = 'bitcoin'; // Puedes cambiar este valor por la moneda que desees mostrar por defecto.
  hedgeFundInvestment: number = 0;
  bonificat: number = 0;
  hedgeProtectionInsurance: number = 0;
  optQuantity: number = 0;
  strikePrice: number = 0;
  expirationDate: string = '';
  earnings: number = 0;
  currentUser: any;
  username: any;
  accountNumber: any;
  userLocation: any;
  userId: any;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
    // Recuperar el usuario actual del localStorage
    const storedUser = localStorage.getItem('currentUser');

    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      console.log('Usuario actual:', this.currentUser);

      // Destructuring para obtener walletId y name
      const { walletId, name, lastname, country, province, accountNumber, id } = this.currentUser;
      console.log('Wallet ID:', walletId);
      console.log('Nombre:', name);

      this.username = `${name} ${lastname}`;
      this.accountNumber = accountNumber;
      this.userLocation = `${province}, ${country}`;
      this.userId = id;

      this.walletService.getWallet(walletId).subscribe(wallet => {
        this.wallet = wallet;
        this.setView(this.currentView);
      });
    } else {
      console.log('No hay usuario en localStorage');
    }
  }

  setView(view: string): void {
    const selectedCoin = this.wallet.coins.find(c => c.name.toLowerCase() === view.toLowerCase());

    if (selectedCoin) {
      this.currentView = view;
      this.hedgeFundInvestment = selectedCoin.hedgeFundInvestment;
      this.bonificat = selectedCoin.bonificat;
      this.hedgeProtectionInsurance = selectedCoin.hedgeProtectionInsurance;
      this.optQuantity = selectedCoin.optQuantity;
      this.strikePrice = selectedCoin.strikePrice;
      this.expirationDate = selectedCoin.expirationDate;
      this.earnings = selectedCoin.earnings;
    }
  }

  updateWallet(): void {
    // Encuentra el índice del coin que se está editando
    const coinIndex = this.wallet.coins.findIndex(c => c.name.toLowerCase() === this.currentView.toLowerCase());

    if (coinIndex !== -1) {
      // Actualiza el coin correspondiente
      this.wallet.coins[coinIndex] = {
        ...this.wallet.coins[coinIndex],
        hedgeFundInvestment: this.hedgeFundInvestment,
        bonificat: this.bonificat,
        hedgeProtectionInsurance: this.hedgeProtectionInsurance,
        optQuantity: this.optQuantity,
        strikePrice: this.strikePrice,
        expirationDate: this.expirationDate,
        earnings: this.earnings
      };

      // Llama al servicio para actualizar la billetera en el backend
      this.walletService.updateWallet(this.wallet.id, this.wallet).subscribe({
        next: (response) => {
          console.log('Billetera actualizada exitosamente:', response);
        },
        error: (err) => {
          console.error('Error al actualizar la billetera:', err);
        }
      });
    }
  }
}
