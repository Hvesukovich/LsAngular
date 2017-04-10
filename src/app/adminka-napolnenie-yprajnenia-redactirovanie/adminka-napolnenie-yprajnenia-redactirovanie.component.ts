import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminka-napolnenie-yprajnenia-redactirovanie',
  templateUrl: './adminka-napolnenie-yprajnenia-redactirovanie.component.html',
  styleUrls: ['./adminka-napolnenie-yprajnenia-redactirovanie.component.css']
})
export class AdminkaNapolnenieYprajneniaRedactirovanieComponent implements OnInit {

    selected_vibor = 'Добавление упражнения';
    public groupMuscles:string = '';
    // name_group_muscles:string = '';
    nameExercises:string = '';

    nameListGroupMuscles = [
        {
            'name_group_muscles' : 'Грудные',
            'nameListExercises' : [
                'Жим гантелей на горизонтальной скамье',
                'Сведение рук в кроссовере на верхнюю часть груди'
            ]
        },
        {
            'name_group_muscles' : 'Бицепс',
            'nameListExercises' : [
                'Молотки',
                'Двойное сгибание рук стоя',
                'Сгибание рук стоя в наклоне по очереди'
            ]
        },
        {
            'name_group_muscles' : 'Трицепс',
            'nameListExercises' : [
                'Французский жым',
                'Поднятие гантели из-за головы',
                'Кикбэк'
            ]
        }
    ];

    clear_info():void{
        // this.groupMuscles = '';
        this.nameExercises ='';
    }

  //Работа с типом упражнений
    tip_ypr:string[] = [
        'Ростяжка',
        'Разминка',
        'Силовое упражнение'
    ];
    private selectedArr: string[] = [undefined];

    btn_dobavlenie:number = this.tip_ypr.length;

    btn_dobavlenie_dec():void{
        if(this.tip_ypr.length > this.selectedArr.length){
            // this.btn_dobavlenie--;
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
  //Конец работы с ТИПОМ УПРАЖЕНИЙ

  constructor() { }

  ngOnInit() {
  }
    

}
