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
  private startTime: number = 0;
  private seconds: number = 0;
  private minutes: number = 0;
  private hours: number = 0;
  private startCountTime: any;
  private stopper: string = this.hours + ":" + this.minutes + ":" + this.seconds;

  public get Title(): string {
    return this.title;
  }

  public get StartTime(): number {
    return this.startTime;
  }

  public set StartTime(value: number) {
    this.startTime = value;
  }

  public get Seconds(): number {
    return this.seconds;
  }

  public set Seconds(value: number) {
    this.seconds = value;
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

  public get StartCountTime(): any {
    return this.startCountTime;
  }

  public set StartCountTime(value: any) {
    this.startCountTime = value;
  }

  public get Stopper(): string {
    return this.stopper;
  }

  public set Stopper(value: string) {
    this.stopper = value;
  }

  public countTime() {
    for (let i = 1; i <= 60; i++) {
      this.startTime++;
    }
    if (this.startTime == 60) {
      this.seconds++;
    }
    if (this.seconds == 60) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes == 60) {
      this.hours++;
      this.minutes = 0;
      this.seconds = 0;
    }
    this.stopper = this.hours + ":" + this.minutes + ":" + this.seconds;
  }

  public startStopper() {
    this.startCountTime = setInterval(this.countTime, 1000);

  }

  public stopStopper() {
    clearInterval(this.startCountTime)
  }

  public resetStopper() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.stopper = this.hours + ":" + this.minutes + ":" + this.seconds;
    this.stopStopper();
  }



}