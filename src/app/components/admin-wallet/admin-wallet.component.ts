import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalletService } from '../../services/wallet.service';
import { Wallet } from '../../models/wallet.model';

@Component({
  selector: 'app-admin-wallet',
  templateUrl: './admin-wallet.component.html',
  styleUrls: ['./admin-wallet.component.css']
})
export class AdminWalletComponent implements OnInit {
  walletId: string = '';
  wallet!: Wallet;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.walletId = this.route.snapshot.paramMap.get('id') || '';
    this.loadWalletData();
  }

  loadWalletData(): void {
    this.walletService.getWallet(this.walletId).subscribe({
      next: (data) => {
        this.wallet = data;
      },
      error: (err) => {
        this.error = 'Error loading wallet data.';
      }
    });
  }

  updateWallet(): void {
    // Actualiza la billetera en el backend
    this.walletService.updateWallet(this.walletId, this.wallet).subscribe({
      next: (response) => {
        console.log('Billetera actualizada exitosamente:', response);
      },
      error: (err) => {
        this.error = 'Error updating wallet.';
      }
    });
  }
}
