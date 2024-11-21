import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';

@Entity()
export class Attendance {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'ID único do registro de ponto' })
    id: number;

    @ManyToOne(() => User, (user) => user.id, { eager: true })
    @ApiProperty({ description: 'Usuário que registrou o ponto', type: () => User })
    user: User;

    @Column()
    @ApiProperty({ description: 'Tipo do registro (entrada ou saída)', example: 'entrada' })
    tipo: string;

    @CreateDateColumn()
    @ApiProperty({ description: 'Data e hora de criação do registro' })
    criadoEm: Date;

    @UpdateDateColumn()
    @ApiProperty({ description: 'Data e hora da última atualização do registro' })
    atualizadoEm: Date;
}
