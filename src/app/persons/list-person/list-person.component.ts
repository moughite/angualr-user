import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-person',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './list-person.component.html',
  styleUrl: './list-person.component.scss'
})
export class ListPersonComponent implements OnInit,OnDestroy{


  listPerson!:Person[];

  personSubscription?:Subscription;

  constructor(private personService:PersonService,private router:Router){

  }

  viewDetails(person: Person): void {
    this.router.navigate(['/persons', person.id]); // Navigation vers les détails de person
  }
  
 

  ngOnInit(): void {   
    this.personSubscription=this.personService.personSubject.subscribe(
      (listPerson:Person[])=>{
        this.listPerson=listPerson;
      }
    );
    this.personService.emitPerson();
  }

  addPerson() {
   this.router.navigate(['new-person']);
    }


  ngOnDestroy(): void {
   this.personSubscription?.unsubscribe();
    }

}
