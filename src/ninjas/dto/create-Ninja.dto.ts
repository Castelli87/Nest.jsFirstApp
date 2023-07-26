import { MinLength, IsEnum } from "class-validator";

export class CreateNinjaDto {
    @MinLength(5)
    name:string;

    @IsEnum(['stars','nunchucks'],{message:'Use correct weapon'})
    weapon:'stars'|'nunchucks'
    
}

