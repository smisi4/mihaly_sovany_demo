import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ko-papir-ollo',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ko-papir-ollo.component.html',
  styleUrl: './ko-papir-ollo.component.css',
  encapsulation: ViewEncapsulation.None
})

export class KoPapirOlloComponent {
  private title: string = 'Kő-Papír-Olló';
  private enemyChoice: number = 0;
  private points: number = 100;
  private winnerPrize: number = 20;
  private looserCost: number = 20;
  private myChoice: number = 0;
  private showPoints: string = 'Pontszám: ' + this.points;
  private srcStone: string = 'assets/img_kopapirollo/stone.jpg';
  private srcPaper: string = 'assets/img_kopapirollo/paper.jpg';
  private srcScissors: string = 'assets/img_kopapirollo/scissors.jpg';
  private resultImgHeight: number = 50;
  private resultImgWidth: number = 50;
  private resultImgMargin: string = '5px';
  private enemyBorder: string = "";
  private myBorder: string = "";
  private winnerBorder: string = '2px solid green';
  private looserBorder: string = '2px solid red';
  private drawBorder: string = '2px solid blue';

  public get Title(): string {
    return this.title;
  }

private get Enemy(): number {
  return this.enemyChoice;
}

private set Enemy(value: number) {
  this.enemyChoice = value;
}

  public get Points(): number {
    return this.points;
  }

  public set Points(value: number) {
    this.points = value;
  }

  public get WinnerPrize(): number {
    return this.winnerPrize;
  }

  public set WinnerPrize(value: number) {
    this.winnerPrize = value;
  }

  public get LooserCost(): number {
    return this.looserCost;
  }

  public set LooserCost(value: number) {
    this.looserCost = value;
  }

  public get MyChoice(): number {
    return this.myChoice;
  }

  public set MyChoice(value: number) {
    this.myChoice = value;
  }

  public get ShowPoints(): string {
    return this.showPoints;
  }

  public set ShowPoints(value: string) {
    this.showPoints = value;
  }

  public get SrcStone(): string {
      return this.srcStone;
  }

  public set SrcStone(value: string) {
      this.srcStone = value;
  }

  public get SrcPaper(): string {
      return this.srcPaper;
  }

  public set SrcPaper(value: string) {
      this.srcPaper = value;
  }

  public get SrcScissors(): string {
      return this.srcScissors;
  }

  public set SrcScissors(value: string) {
      this.srcScissors = value;
  }

  public get ResultImgHeight(): number {
    return this.resultImgHeight;
  }

  public set ResultImgHeight(value: number) {
    this.resultImgHeight = value;
  }

  public get ResultImgWidth(): number {
    return this.resultImgWidth;
  }

  public set ResultImgWidth(value: number) {
    this.resultImgWidth = value;
  }

  public get ResultImgMargin(): string {
    return this.resultImgMargin;
  }

  public set ResultImgMargin(value: string) {
    this.resultImgMargin = value;
  }

  public get EnemyBorder(): string {
    return this.enemyBorder;
  }

  public set EnemyBorder(value: string) {
    this.enemyBorder = value;
  }

  public get MyBorder(): string {
    return this.myBorder;
  }

  public set MyBorder(value: string) {
    this.myBorder = value;
  }

  public get WinnerBorder(): string {
    return this.winnerBorder;
  }

  public set WinnerBorder(value: string) {
    this.winnerBorder = value;
  }

  public get LooserBorder(): string {
    return this.looserBorder;
  }

  public set LooserBorder(value: string) {
    this.looserBorder = value;
  }

  public get DrawBorder(): string {
    return this.drawBorder;
  }

  public set DrawBorder(value: string) {
    this.drawBorder = value;
  }


  public getEnemyChoice(): number {
    this.enemyChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(this.enemyChoice);
    return this.enemyChoice;
}

  public showEnemyChoice(): void {
    let showEnemyChoice = this.getEnemyChoice();
      let img = document.createElement("img");
      if (showEnemyChoice == 1) {
          img.src = this.srcStone;
          img.height = this.resultImgHeight;
          img.width = this.resultImgWidth;
          img.style.margin = this.resultImgMargin;
          img.style.border = this.enemyBorder;
      } else if (showEnemyChoice == 2) {
          img.src = this.srcPaper;
          img.height = this.resultImgHeight;
          img.width = this.resultImgWidth;
          img.style.margin = this.resultImgMargin;
          img.style.border = this.enemyBorder;
      } else if (showEnemyChoice == 3) {
          img.src = this.srcScissors;
          img.height = this.resultImgHeight;
          img.width = this.resultImgWidth;
          img.style.margin = this.resultImgMargin;
          img.style.border = this.enemyBorder;
      }
      let src = document.getElementById("enemyChoice");
      src!.appendChild(img);
  }
  
  public showMyChoiceStone(): void {
      let img = document.createElement("img");
      img.src = this.srcStone;
      img.height = this.resultImgHeight;
      img.width = this.resultImgWidth;
      img.style.margin = this.resultImgMargin;
      img.style.border = this.myBorder;
      let src = document.getElementById("myChoice");
      src!.appendChild(img);
      this.myChoice = 1;
  }
  
  public showMyChoicePaper(): void {
      let img = document.createElement("img");
      img.src = this.srcPaper;
      img.height = this.resultImgHeight;
      img.width = this.resultImgWidth;
      img.style.margin = this.resultImgMargin;
      img.style.border = this.myBorder;
      let src = document.getElementById("myChoice");
      src!.appendChild(img);
      this.myChoice = 2;
  }
  
  public showMyChoiceScissors(): void {
      let img = document.createElement("img");
      img.src = this.srcScissors;
      img.height = this.resultImgHeight;
      img.width = this.resultImgWidth;
      img.style.margin = this.resultImgMargin;
      img.style.border = this.myBorder;
      let src = document.getElementById("myChoice");
      src!.appendChild(img);
      this.myChoice = 3;
  }
  
  
  public checkWinner(): void {
      if (this.points > 0) {
          if ((this.myChoice == 1 && this.enemyChoice == 3) || (this.myChoice == 2 && this.enemyChoice == 1) || (this.myChoice == 3 && this.enemyChoice == 2)) {
              //console.log("Én nyertem!");
              this.points += this.winnerPrize;
              this.showPoints = "Pontszám: " + this.points;
              this.myBorder = this.winnerBorder;
              this.enemyBorder = this.looserBorder;
          } else if ((this.myChoice == 1 && this.enemyChoice == 2) || (this.myChoice == 2 && this.enemyChoice == 3) || (this.myChoice == 3 && this.enemyChoice == 1)) {
              //console.log("A gép nyert!");
              this.points -= this.looserCost;
              this.showPoints = "Pontszám: " + this.points;
              this.myBorder = this.looserBorder;
              this.enemyBorder = this.winnerBorder;
          } else {
              //console.log("Döntetlen!");
              this.points == this.points;
              this.showPoints = "Pontszám: " + this.points;
              this.myBorder = this.drawBorder;
              this.enemyBorder = this.drawBorder;
          }
      } else {
          alert("Vége a játéknak!");
          this.newGame();
      }
  }

  public newGame(): void {
    location.reload();
  }

  public mouseOverStone(): void {
    document.getElementById("hoverButtonStone")!.style.borderColor = "rgb(0, 179, 0)";
}

public mouseOutStone(): void {
    document.getElementById("hoverButtonStone")!.style.borderColor = "rgb(66, 100, 104)";
}

public mouseOverPaper(): void {
    document.getElementById("hoverButtonPaper")!.style.borderColor = "rgb(0, 179, 0)";
}

public mouseOutPaper(): void {
    document.getElementById("hoverButtonPaper")!.style.borderColor = "rgb(66, 100, 104)";
}
public mouseOverScissors(): void {
    document.getElementById("hoverButtonScissors")!.style.borderColor = "rgb(0, 179, 0)";
}

public mouseOutScissors(): void {
    document.getElementById("hoverButtonScissors")!.style.borderColor = "rgb(66, 100, 104)";
}
}
