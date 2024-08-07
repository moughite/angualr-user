import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'] // Corrected property name to 'styleUrls'
})
export class PersonDetailComponent implements OnInit {
  person!: Person;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const personId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.personService.getPersonById(personId).subscribe(
      (person: Person) => this.person = person
    );
  }

  goBack(): void {
    this.router.navigate(['/persons']);
  }
}