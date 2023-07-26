import { Body, Controller, Get, Param, Post, Put, Query, Delete, HttpException, HttpStatus, ParseIntPipe, ValidationPipe, UseGuards, } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-Ninja.dto';
import { UpdateNinjaDto } from './dto/update-Ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
//@UseGuards(BeltGuard) This one is a controller Guard 
export class NinjasController {

    constructor(private readonly ninjaService: NinjasService) { } // injection dependency to instantietion of the service/provider

    @Get()
    //filtering by querys
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
        return this.ninjaService.getNinjas(weapon)
    }
    @Get(':id')
    getOneNinja(@Param('id',ParseIntPipe) id: number) { // using this Pipe we can transform the id that is a string into a number
        try {

            return this.ninjaService.getNinja(id);// using the service and the getninja methods 
        } catch (err) {
            throw new HttpException({ status: HttpStatus.NOT_FOUND , error: 'Ninja not Found' }, HttpStatus.FORBIDDEN, {
                cause: err
            })
        }
    }
    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
        return this.ninjaService.createNinja(createNinjaDto)
    }
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjaService.updateNinja(+id, updateNinjaDto)
    }
    @Delete(':id')
    removeNinja(@Param('id') id: string) {
        return this.ninjaService.removeNinja(+id)
    }
}
