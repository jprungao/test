import { Component } from '@angular/core';
import { PetService } from 'src/services/pet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coding-test';

  constructor(public petService: PetService) {}
  
}
