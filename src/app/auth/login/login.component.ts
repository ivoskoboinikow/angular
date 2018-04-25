import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Massage } from '../../shared/models/massage.model';

@Component({
  selector: 'buh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  massage: Massage; 

    constructor(
        private usersService: UsersService
    ) {}
    ngOnInit() {
    this.massage = new Massage ('danger', '');
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

    private showMassage(text: string, type: string = 'danger'){
        this.massage = new Massage(type, text);
        window.setTimeout(() => {
            this.massage.text = '';
        }, 5000);
    }

  onSubmit() {
      const formData = this.form.value;

      this.usersService.getUserByEmail(formData.email)
          .subscribe((user: User) => {
              if (user){
                  if(user.password === formData.password) {

                  } else {
                      this.showMassage('Пароль не верный');
                  }
              } else {
                  this.showMassage('Такого пользователя не существует');
              } 
            });
  }
}
