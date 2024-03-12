import { Component, Input, OnInit } from "@angular/core";
import { Pet, PetService } from "src/services/pet.service";

@Component({
    selector: 'app-stage',
    styleUrls: ['./stage.component.scss'],
    templateUrl: './stage.component.html'
})
export class StageComponent implements OnInit{
    @Input() petStatus: string = 'listed'
    @Input() stage: string = 'Stage Title'
    pets: Pet[] = [{name: 'test', serviceStatus: 'listed'}]

    constructor(private petService: PetService) {}

    ngOnInit(): void {
       
    }

    get petsLists() {
        return this.petService.getPetsPerStatus(this.stage)
    }

    movePet (pet: Pet) {
        const status = this.petService.stages[this.petService.stages.indexOf(this.stage) + 1]
        this.petService.moveStatus({name: pet.name, serviceStatus: status})
    }
}