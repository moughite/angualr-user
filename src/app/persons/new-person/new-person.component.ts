import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-new-person',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit {

  form: FormGroup | undefined; // Retiré le point d'interrogation pour indiquer que ce champ sera initialisé

  constructor(
    private personService: PersonService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      adresse: ['', Validators.required],
      drink: ['', Validators.required],
      hobbies: this.fb.array([])
    });
  }

  get hobbies(): FormArray {
    return this.form?.get('hobbies') as FormArray;
  }

  onSubmit(): void {
    const formValue = this.form?.value;
    const newPerson = new Person(
     0,
      formValue['firstName'],
      formValue['lastName'],
      formValue['adresse'],
      formValue['drink'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    
    this.personService.addPerson(newPerson);
    this.router.navigate(['persons']);
  }

  
}
