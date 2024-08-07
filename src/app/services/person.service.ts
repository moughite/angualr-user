import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements OnInit {

  private listPerson: Person[] = [
    new Person(1, 'moughite', 'hanafi', 'regensburg', 'cola', ['test1', 'test2']),
    new Person(2, 'sanae', 'hanafi', 'tanger', 'pepsi', ['test1', 'test2']),
  ];

  personSubject = new Subject<Person[]>();

  constructor() { }

  emitPerson() {
    this.personSubject.next(this.listPerson.slice());
  }

  ngOnInit(): void {}

  addPerson(person: Person) {
    person.id=this.listPerson.length ? this.listPerson[(this.listPerson.length-1)].id+1 : 0;
    this.listPerson.push(person);
    this.emitPerson();
  }

  getPersons(): Person[] {
    return this.listPerson;
  }

  getPersonCount(): number {
    return this.listPerson.length;
  }

  getPersonById(id: number): Observable<Person> {
    const person = this.listPerson.find(u => u.id === id);
    return of(person as Person);
  }
}
