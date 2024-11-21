import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'ID único da empresa' })
    id: number;

    @Column()
    @ApiProperty({ description: 'Nome da empresa' })
    nome: string;

    @Column({ unique: true })
    @ApiProperty({ description: 'CNPJ da empresa', example: '00.000.000/0000-00' })
    cnpj: string;

    @Column()
    @ApiProperty({ description: 'Endereço da empresa' })
    endereco: string;

    @OneToMany(() => User, (user) => user.empresa)
    @ApiProperty({ description: 'Lista de usuários vinculados à empresa', type: () => [User] })
    users: User[];
}
