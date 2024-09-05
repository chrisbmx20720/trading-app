import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {
  private existingEmails = ['test@example.com', 'user@example.com']; // Ejemplo de correos electrónicos existentes

  async isEmailTaken(email: string): Promise<boolean> {
    const result = of(this.existingEmails.includes(email)).pipe(
      delay(1000) // Simula un retraso del servidor
    );
    return lastValueFrom(result);
  }
}
