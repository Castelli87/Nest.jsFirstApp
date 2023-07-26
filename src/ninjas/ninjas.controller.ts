import { Body, Controller, Get, Param, Post, Put, Query,Delete } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-Ninja.dto';
import { UpdateNinjaDto } from './dto/update-Ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

    constructor( private readonly ninjaService: NinjasService){} // injection dependency to instantietion of the service/provider

    @Get()
    //filtering by querys
    getNinjas(@Query('weapon') weapon:'stars'|'nunchucks'){
        return this.ninjaService.getNinjas(weapon)
    }
    @Get(':id')
    getOneNinja(@Param('id')id:string){
    return { id };
    }
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return{
            name: createNinjaDto.name,
        }
    }
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
        return{
            id,
            name:updateNinjaDto
        }
    }
    @Delete(':id')
    removeNinja(@Param('id') id:string){
        return{
            id,
        }
    }
}
