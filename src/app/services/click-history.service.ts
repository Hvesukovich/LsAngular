import { Injectable } from '@angular/core';

@Injectable()
export class ClickHistoryService {

    public namesList: string[] = [];

    constructor() { }

  saveLink(name: string): void{
    this.namesList.push(name);
  }

}
