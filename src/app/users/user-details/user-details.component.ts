import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'] // Corrected from `styleUrl` to `styleUrls`
})
export class UserDetailsComponent implements OnInit { // Added OnInit interface

  user?: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(userId).subscribe(
      (user: User) => this.user = user
    );
  }

  goBack(): void {
    this.router.navigate(['users']);
  }
}
