import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  btn_dobavlenie_style:string="";

  tip_ypr:string[] = [
    '111111',
    '222222',
    '333333',
    '444444'
  ];
  private selectedArr: string[] = [undefined];

  btn_dobavlenie:number = this.tip_ypr.length;
  btn_otnena:number = 0;

  btn_dobavlenie_dec():void{
    if(this.tip_ypr.length > this.selectedArr.length){
      this.btn_dobavlenie--;
      this.selectedArr.push(undefined);
      console.log(this.btn_dobavlenie);
    }
  }
  btn_dobavlenie_inc(iterator):void{
    let newArr: string[] = [];
    let i: number = 0;
    for(let value of this.selectedArr){
      if(i !== iterator){
        newArr.push(value);
      }
      i++;
    }
    this.selectedArr = newArr;

    this.btn_dobavlenie++;
    console.log(this.btn_dobavlenie);
  }


  // rows(): string[]{
  //   let arr: undefined[] = [];
  //
  //   if(this.selectedArr.length == 0){
  //     arr = new Array(1);
  //   } else if(this.selectedArr.length < this.tip_ypr.length){
  //     arr = new Array(this.selectedArr.length + 1);
  //   } else{
  //     arr = new Array(this.selectedArr.length);
  //   }
  //
  //   return arr;
  // }

  possibleSelect(itemFromSelect: string = ''): string[]{
    let tip_ypr: string[] = [];

    for(let value of this.tip_ypr){
      if(itemFromSelect !== value){
        if(this.selectedArr.indexOf(value) === -1){
          tip_ypr.push(value);
        }
      } else {
        tip_ypr.push(value);
      }

    }

    return tip_ypr;
  }

  constructor() { }

  ngOnInit() {
  }

}
