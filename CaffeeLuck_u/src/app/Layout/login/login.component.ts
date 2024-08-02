import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() IsLogin = new EventEmitter<boolean>();

  loginInfo = new FormGroup({
    Name: new FormControl('', Validators.required),
    Pass: new FormControl('', Validators.required)
  });


  http = inject(HttpClient);
  onLogin() {
    const loginOBJ = {
      UserName: this.loginInfo.value.Name,
      UserPass: this.loginInfo.value.Pass
    }
    this.http.post("http://localhost:5109/api/Accounts/login", loginOBJ).subscribe((res:any) => {
      if(res.results) {
        console.log('Loging successful');        
      } else {
        console.log('Error');
      }
      this.IsLogin.emit(res.results);
    })

    
  }
}