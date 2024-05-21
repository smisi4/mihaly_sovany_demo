import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-szam-tipp',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './szam-tipp.component.html',
  styleUrl: './szam-tipp.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SzamTippComponent {
  private title: string = 'Számtipp';
  private randomNumber: number = 0;
  private hint: number = 1;
  private credit: number = 100;
  private balance: string = 'Pontszám: ' + this.credit;
  private result: string = '';
  private resultColor: string = '';

  public get Title(): string {
    return this.title;
  }

  public get Hint(): number {
    return this.hint;
  }

  public set Hint(value: number) {
    this.hint = value;
  }

  public get Credit(): number {
    return this.credit;
  }

  public set Credit(value: number) {
    this.credit = value;
  }

  public get Balance(): string {
    return this.balance;
  }

  public set Balance(value: string) {
    this.balance = value;
  }

  public get Result(): string {
    return this.result;
  }

  public set Result(value: string) {
    this.result = value;
  }

  public get ResultColor(): string {
    return this.resultColor;
  }

  public set ResultColor(value: string) {
    this.resultColor = value;
  }

  public generateRandomNumber(): number {
    this.randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(this.randomNumber);
    return this.randomNumber;
  }

  public letsPlay(): void {
    const hintPrice = 10;
    const prize = 110;
    if (this.credit > 0) {
      if (this.hint == this.randomNumber) {
        this.result = "A választott szám és a keresett szám megegyezik! Nyert!";
        this.resultColor = "#198754"; //bs-success
        this.credit += (prize - hintPrice);
        this.balance = "Pontszám: " + this.credit;
        this.generateRandomNumber()
      } else if (this.hint > this.randomNumber) {
        this.result = "A választott szám nagyobb, mint a keresett szám! Tippeljen újra!";
        this.resultColor = "#0d6efd"; //bs-primary
        this.credit -= hintPrice;
        if (this.credit <= 0) {
          this.result = "Vége a játéknak! Veszített!";
          this.resultColor = "#dc3545"; //bs-danger
        }
        this.balance = "Pontszám: " + this.credit;
      } else if (this.hint < this.randomNumber) {
        this.result = "A választott szám kisebb, mint a keresett szám! Tippeljen újra!";
        this.resultColor = "#0d6efd"; //bs-primary
        this.credit -= hintPrice;
        if (this.credit <= 0) {
          this.result = "Vége a játéknak! Veszített!";
          this.resultColor = "#dc3545"; //bs-danger
        }
        this.balance = "Pontszám: " + this.credit;
      }
    }
  }

  public newGame(): void {
    location.reload();
  }
}