import { Component, OnInit } from '@angular/core';
import { ClickHistoryService } from './../services/click-history.service';

@Component({
  selector: 'app-galvnaja-admin-akkardion',
  templateUrl: './galvnaja-admin-akkardion.component.html',
  styleUrls: ['./galvnaja-admin-akkardion.component.css']
})

export class GalvnajaAdminAkkardionComponent implements OnInit {

  menuAkkordion:string[] = ['Администрирование',
                            'Наполнение контентом',
                            'Просмотр контента',
                            'Улучшение приложения'];
  
  podmenuAkkordionAdmin:Object[] = [{'name': 'Создание пользователя (админа)', 'link':''},
      {'name':'Права доступа', 'link': 'rules'}];

  podmenuAkkordionNapolnenie:Object[] = [{'name':'Части тела', 'link':'r_chasti_tela'},
                                         {'name':'Группы мышц', 'link':'r-grup-mishc'},
                                         {'name':'Мышцы', 'link':'r-mishci'},
                                         {'name':'Снаряды', 'link':'r-snaradi'},
                                         {'name':'Виды антропометрических данных', 'link':'r-antropometricheskie-dannie'},
                                         {'name':'Виды нагрузки на мышцы', 'link':'r-vidi-nagruzki'},
                                         {'name':'Типы упражнений', 'link':'r-tipi-uprajnenii'},
                                         {'name':'Упражнения', 'link':'r_yprajnenija'}];

  podmenuAkkordionProsmotr:Object[] = [{'name':'Части тела', 'link':''},
                                       {'name':'Группы мышц', 'link':''},
                                       {'name':'Мышцы', 'link':''},
                                       {'name':'Снаряды', 'link':''},
                                       {'name':'Виды антропометрических данных', 'link':''},
                                       {'name':'Виды нагрузки на мышцы', 'link':''},
                                       {'name':'Типы упражнений', 'link':''},
                                       {'name':'Упражнения', 'link':''}];

  podmenuAkkordionYlychshenie:string[] = ['Контроль версий',
                                          'Тестирование (Баги)',
                                          'Замечания и предложения'];
  
  ngOnInit() {
  }

    constructor(private clickHistoryService: ClickHistoryService) { }

    saveLink(name: string): void{
        this.clickHistoryService.saveLink(name);
    }
}
