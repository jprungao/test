import { Component } from "@angular/core";
import { PetService } from "src/services/pet.service";

@Component({
    selector: 'app-navigation',
    styleUrls: ['./navigation.component.scss'],
    templateUrl: './navigation.component.html'
})
export class NavigationComponent {
    name: string = ''

    constructor(private petService: PetService) {}

    addPet() {
        this.petService.addPet({
            name: this.name,
            serviceStatus: 'listed'
        })
    }
}