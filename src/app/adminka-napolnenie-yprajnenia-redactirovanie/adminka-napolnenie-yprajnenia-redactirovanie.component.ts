import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminka-napolnenie-yprajnenia-redactirovanie',
  templateUrl: './adminka-napolnenie-yprajnenia-redactirovanie.component.html',
  styleUrls: ['./adminka-napolnenie-yprajnenia-redactirovanie.component.css']
})
export class AdminkaNapolnenieYprajneniaRedactirovanieComponent implements OnInit {

    // public groupMuscles:string = '';
    // name_group_muscles:string = '';
    // nameExercises:string = '';
    
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
    
    // func()



  constructor() { }

  ngOnInit() {
  }
    

}
