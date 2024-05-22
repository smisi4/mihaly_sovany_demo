import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stopper',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './stopper.component.html',
  styleUrl: './stopper.component.css',
  encapsulation: ViewEncapsulation.None
})

export class StopperComponent {
  private title: string = 'Stopper';
  private secondStart: number = 0;
  private minutes: number = 0;
  private hours: number = 0;
  private seconds: number[] = [];
  private i: number = 0;
  private startCountSeconds: any;
  private stopper: string = this.hours + ":" + this.minutes + ":" + this.secondStart;

  public get Title(): string {
    return this.title;
  }

  public get SecondStart(): number {
    return this.secondStart;
  }

  public set SecondStart(value: number) {
    this.secondStart = value;
  }

  public get Minutes(): number {
    return this.minutes;
  }

  public set Minutes(value: number) {
    this.minutes = value;
  }

  public get Hours(): number {
    return this.hours;
  }

  public set Hours(value: number) {
    this.hours = value;
  }

  public get Seconds(): number[] {
    return this.seconds;
  }

  public set Seconds(value: number[]) {
    this.seconds = value;
  }

  public get I(): number {
    return this.i;
  }

  public set I(value: number) {
    this.i = value;
  }

  public get StartCountSeconds(): any {
    return this.startCountSeconds;
  }

  public set StartCountSeconds(value: any) {
    this.startCountSeconds = value;
  }

  public get Stopper(): string {
    return this.stopper;
  }

  public set Stopper(value: string) {
    this.stopper = value;
  }

  public countSeconds(): void {
    for (this.i = 1; this.i <= 60; this.i++) {
      this.seconds.push(this.i);
    }
    if (this.seconds[this.i] == 60) {
      this.minutes++;
    }
    if (this.minutes == 60) {
      this.hours++;
      this.minutes = 0;
    }
    this.stopper = this.hours + ":" + this.minutes + ":" + this.seconds[this.i];
    this.i = (this.i + 1) % this.seconds.length;
  }

  public startStopper(): void {
    this.startCountSeconds = setInterval(this.countSeconds, 1000);
  }

  public stopStopper(): void {
    clearInterval(this.startCountSeconds)
  }

  public resetStopper(): void {
    this.i = 0;
    this.minutes = 0;
    this.hours = 0;
    this.stopper = this.hours + ":" + this.minutes + ":" + this.i;
    this.stopStopper();
  }
}