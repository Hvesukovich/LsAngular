import { Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {
    
    public user_info:{'login': string, 'rules': string} = {
        'login':null,
        'rules':null
    };

    getInfo():string{
        return 'Логин: ' + this.user_info['login'] + ', права: ' + this.user_info['rules'];
    }

    
}
