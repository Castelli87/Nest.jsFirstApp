import { Body, Controller, Get, Param, Post, Put, Query,Delete } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-Ninja.dto';
import { UpdateNinjaDto } from './dto/update-Ninja.dto';

@Controller('ninjas')
export class NinjasController {
    //filtering by querys
    @Get()
    getNinjas(@Query('type') type:string){
        return[{type}]
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
