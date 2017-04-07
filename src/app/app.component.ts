import { Component } from '@angular/core';
import { ClickHistoryService } from './services/click-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Привет мир';
    
    constructor(private clickHistoryService: ClickHistoryService){
        console.log(clickHistoryService.namesList);
    }
}
