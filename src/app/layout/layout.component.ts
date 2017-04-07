import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './../services/user-info.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  login:string = '';
  password:string = '';

    constructor(private userInfoService: UserInfoService, private router: Router) { }
    
    auth(login:string, password: string) {
        console.log('login: ' + login +'. password: ' + password);

        let l = this.userInfoService.user_info.login = login;
        
        let r = this.userInfoService.user_info.rules = 'admin';
        console.log(this.userInfoService.getInfo());

        if((l === 'admin') && (password === '123')){
            console.log('Вход выполнен');
            this.router.navigate(['glavnaja']);
        }
        else {
            alert('Ошибка ввода данных');
            this.login= '';
            this.password= '';
        }
    }

    ngOnInit() {
    }
}

