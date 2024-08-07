import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent implements OnInit,OnDestroy {

  users?: User[];

  userSubscription = new Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  viewDetails(user: User): void {
    this.router.navigate(['/users', user.id]); // Navigation vers les détails de l'utilisateur
  }
  
  
  ngOnInit(): void {
    this.userSubscription = this.userService.usersSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitSubject();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
