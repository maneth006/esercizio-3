import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondoComponent } from './secondo/secondo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-gitpod';
}
