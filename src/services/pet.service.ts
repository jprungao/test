import { Injectable } from "@angular/core";

export interface Pet {
    name: string;
    serviceStatus: string;
}

@Injectable({
    providedIn: 'root'
})
export class PetService {
    public stages: string[] = ['listed', 'examining', 'finally_back_to_human']
    pets: Pet[] = [
        {
            name: 'dog 1',
            serviceStatus: 'listed'
        },
        {
            name: 'dog 2',
            serviceStatus: 'examining'
        }
    ]

    addPet(data: Pet) {
        this.pets = [...this.pets, data]
    }

    getPetsPerStatus(status: string): Pet[] {
        const pets = this.pets.filter((pet) => pet.serviceStatus === status)
        console.log(pets)
        return pets
    }

    moveStatus(payload: { name: string, serviceStatus: string }) {
        this.pets = this.pets.map((pet) => pet.name === payload.name ? { ...payload } : pet)
    }
}