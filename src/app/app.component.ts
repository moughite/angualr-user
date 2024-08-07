import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListPersonComponent } from "./persons/list-person/list-person.component";
import { HeadBarComponent } from "./menu/head-bar/head-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ListPersonComponent, RouterModule, HeadBarComponent]
})
export class AppComponent {
  title = 'munich';
}
