import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAttendanceDto {
    @ApiProperty({ description: 'ID do usuário que está registrando o ponto', example: 1 })
    @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
    @IsNumber({}, { message: 'O ID do usuário deve ser numérico' })
    userId: number;

    @ApiProperty({ description: 'Tipo do registro de ponto (entrada ou saída)', example: 'entrada' })
    @IsNotEmpty({ message: 'O tipo é obrigatório' })
    @IsEnum(['entrada', 'saida'], { message: 'O tipo deve ser "entrada" ou "saida"' })
    tipo: string;
}
