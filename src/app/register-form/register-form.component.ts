import { Component} from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent{
  log(y){
    console.log(y);
  }
  submit(f){
    console.log(f);
  }

}
