import { Body, Controller, Get, Param, Post, Put, Query, Delete, HttpException, HttpStatus, } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-Ninja.dto';
import { UpdateNinjaDto } from './dto/update-Ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjaService: NinjasService) { } // injection dependency to instantietion of the service/provider

    @Get()
    //filtering by querys
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
        return this.ninjaService.getNinjas(weapon)
    }
    @Get(':id')
    getOneNinja(@Param('id') id: string) {
        try {

            return this.ninjaService.getNinja(+id);// using the service and the getninja meth casing the id into a number
            // becasue the params are string and in the service is a number 
        } catch (err) {
            throw new HttpException({ status: HttpStatus.NOT_FOUND , error: 'Ninja not Found' }, HttpStatus.FORBIDDEN, {
                cause: err
            })
        }
    }
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
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
