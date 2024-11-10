import { IsDefined, IsOptional, IsString } from "class-validator"

export class BookDto {
    @IsDefined()
    @IsString()
    title: string

    @IsOptional()
    @IsString()
    description: string

    @IsOptional()
    @IsString()
    author:string
}