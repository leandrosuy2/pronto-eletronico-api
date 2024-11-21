import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Company } from '../companies/company.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'ID único do usuário' })
    id: number;

    @Column()
    @ApiProperty({ description: 'Nome completo do usuário' })
    nome: string;

    @Column({ unique: true })
    @ApiProperty({ description: 'E-mail do usuário', example: 'user@example.com' })
    email: string;

    @Column()
    @ApiProperty({ description: 'Senha do usuário', writeOnly: true })
    senha: string;

    @Column({ default: 'funcionario' })
    @ApiProperty({ description: 'Tipo do usuário (admin ou funcionario)', default: 'funcionario' })
    tipo: string;

    @ManyToOne(() => Company, (company) => company.users, { eager: true })
    @ApiProperty({ description: 'Empresa vinculada ao usuário' })
    empresa: Company;
}
