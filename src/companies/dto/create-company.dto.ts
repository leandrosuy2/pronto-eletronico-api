import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateCompanyDto {
    @ApiProperty({ description: 'Nome da empresa' })
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @IsString()
    nome: string;

    @ApiProperty({ description: 'CNPJ da empresa', example: '00.000.000/0000-00' })
    @IsNotEmpty({ message: 'O CNPJ é obrigatório' })
    @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, { message: 'CNPJ inválido' })
    cnpj: string;

    @ApiProperty({ description: 'Endereço da empresa' })
    @IsNotEmpty({ message: 'O endereço é obrigatório' })
    @IsString()
    endereco: string;
}
