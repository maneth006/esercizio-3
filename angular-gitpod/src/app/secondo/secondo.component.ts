import { Component } from '@angular/core';
import { QuartoComponent } from '../quarto/quarto.component';
import { TerzoComponent } from '../terzo/terzo.component';

@Component({
  selector: 'app-secondo',
  standalone: true,
  imports: [QuartoComponent, TerzoComponent],
  templateUrl: './secondo.component.html',
  styleUrl: './secondo.component.css'
})
export class SecondoComponent {
  meme =[
    {
      NomeMeme1 : 'Your face',
      Description1 : 'In questo meme puoi vedere la tua faccia'
    },
    {
      NomeMeme1 : 'Free food?',
      Description1 : 'In questa foto c\'e un ciccione'
    }
  ]
}
