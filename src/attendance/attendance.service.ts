import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AttendanceService {
    constructor(
        @InjectRepository(Attendance)
        private readonly attendanceRepository: Repository<Attendance>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async createAttendance(createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
        const user = await this.userRepository.findOne({ where: { id: createAttendanceDto.userId } });
        if (!user) throw new NotFoundException('Usuário não encontrado');

        const attendance = this.attendanceRepository.create({
            user,
            tipo: createAttendanceDto.tipo,
        });

        return this.attendanceRepository.save(attendance);
    }

    async findAll(): Promise<Attendance[]> {
        return this.attendanceRepository.find();
    }

    async findOne(id: number): Promise<Attendance> {
        const attendance = await this.attendanceRepository.findOne({ where: { id } });
        if (!attendance) throw new NotFoundException('Registro de ponto não encontrado');
        return attendance;
    }

    async updateAttendance(id: number, updateAttendanceDto: UpdateAttendanceDto): Promise<Attendance> {
        const attendance = await this.findOne(id);
        if (updateAttendanceDto.userId) {
            const user = await this.userRepository.findOne({ where: { id: updateAttendanceDto.userId } });
            if (!user) throw new NotFoundException('Usuário não encontrado');
            attendance.user = user;
        }
        if (updateAttendanceDto.tipo) attendance.tipo = updateAttendanceDto.tipo;
        return this.attendanceRepository.save(attendance);
    }

    async deleteAttendance(id: number): Promise<void> {
        const result = await this.attendanceRepository.delete(id);
        if (result.affected === 0) throw new NotFoundException('Registro de ponto não encontrado');
    }
}
