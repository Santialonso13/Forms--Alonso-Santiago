import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent { 

  miFormulario = this.formBuilder.group({ 
    name: this.formBuilder.control(''), 
    lastName: this.formBuilder.control(''), 
    email: this.formBuilder.control('',[Validators.email, 
       Validators.required]), 
    password: this.formBuilder.control('',Validators.required),
  });

    get emailControl(){  
      return this.miFormulario.get('email');
    } 
    get passwordControl(){ 
      return this.miFormulario.get('password');
    }
  constructor(private formBuilder: FormBuilder){} 

  onSubmit(): void{ 
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "USUARIO REGISTADO CON EXITO",
    showConfirmButton: false,
    timer: 1500
  });
  }

}
