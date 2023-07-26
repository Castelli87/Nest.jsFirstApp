import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-Ninja.dto';
import { UpdateNinjaDto } from './dto/update-Ninja.dto';

@Injectable()
export class NinjasService {
    // fake database 
    private ninjas = [
        { id: 0, name: 'ninjaA', weapon: 'stars' },
        { id: 1, name: 'ninjaB', weapon: 'nunchucks' }
    ]
    //getting the ninjas or query with the weapon to filter all over the ninjas 
    getNinjas(weapon?: 'stars' | 'nunchucks') {
        console.log(this.ninjas)
        if (weapon) {
            return this.ninjas.filter(ninja => ninja.weapon === weapon)
        }
        return this.ninjas
    }
    // pass the id to get a specific ninja 
    getNinja(id: number) {
        const ninja = this.ninjas.find(ninja => ninja.id === id)

        if (!ninja) {
            throw new Error('ninja not found')
        }
        return ninja
    }
    // pass the createNinjaDto 
    createNinja(createNinjaDto: CreateNinjaDto) {
        //spread  the dto that contains name and weapon into an obj and add the prop id in the obj
        const newNinja = {
            ...createNinjaDto,
            id: Date.now()
        }
        this.ninjas.push(newNinja) // push the ninja into the array 
        return newNinja
    }
    // to update a ninja  pass the id and the updateninjDto 
    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
        this.ninjas = this.ninjas.map((ninja) => {
            if (ninja.id === id) {
                return {
                    ...ninja, ...updateNinjaDto
                }
            }
            return ninja
        })
    }
    removeNinja(id: number) {
        const toBeRemoved = this.getNinja(id) // get the ninja that are going to be removed and store in a variable 
        this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id)//filter all over  the ninjas that  have not that id 
        return toBeRemoved // diplay which ninja was filtered out 
    }

}
