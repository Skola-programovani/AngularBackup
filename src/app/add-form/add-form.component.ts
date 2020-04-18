import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  addForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  hide = true;
  ngOnInit(): void {
    this.addForm = this.fb.group({
      username: ['',[
        Validators.required,
      ]],
      password: ['',[
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]]
    })
  }
  get username(){
    return this.addForm.get('username')
  }
  get password(){
    return this.addForm.get('password')
  }
  get email(){
    return this.addForm.get('email')
  }
}
