import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'Nome completo do usuário' })
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @IsString()
    nome: string;

    @ApiProperty({ description: 'E-mail do usuário', example: 'user@example.com' })
    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    @IsEmail({}, { message: 'E-mail inválido' })
    email: string;

    @ApiProperty({ description: 'Senha do usuário (mínimo 6 caracteres)' })
    @IsNotEmpty({ message: 'A senha é obrigatória' })
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    senha: string;

    @ApiProperty({ description: 'ID da empresa associada ao usuário', example: 1 })
    @IsNotEmpty({ message: 'A empresa é obrigatória' })
    empresaId: number;
}
