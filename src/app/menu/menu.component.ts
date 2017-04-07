import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  arrMenu: string[] = ['Перейти в режим пользователя',
                   'Личный кабинет', 
                   'Выйти из админки', 
                   'Ещё пока не придумал'];

  constructor() { }

  ngOnInit() {
  }

}
