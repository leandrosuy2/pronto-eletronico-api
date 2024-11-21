import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Attendance } from './attendance.entity';

@ApiTags('Pontos')
@Controller('attendance')
export class AttendanceController {
    constructor(private readonly attendanceService: AttendanceService) { }

    @Post()
    @ApiOperation({ summary: 'Registra um ponto' })
    @ApiResponse({ status: 201, description: 'Registro de ponto criado com sucesso', type: Attendance })
    createAttendance(@Body() createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
        return this.attendanceService.createAttendance(createAttendanceDto);
    }

    @Get()
    @ApiOperation({ summary: 'Lista todos os registros de ponto' })
    @ApiResponse({ status: 200, description: 'Lista de registros retornada com sucesso', type: [Attendance] })
    findAll(): Promise<Attendance[]> {
        return this.attendanceService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtém detalhes de um registro de ponto específico' })
    @ApiResponse({ status: 200, description: 'Registro de ponto retornado com sucesso', type: Attendance })
    findOne(@Param('id') id: number): Promise<Attendance> {
        return this.attendanceService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualiza um registro de ponto' })
    @ApiResponse({ status: 200, description: 'Registro de ponto atualizado com sucesso', type: Attendance })
    updateAttendance(@Param('id') id: number, @Body() updateAttendanceDto: UpdateAttendanceDto): Promise<Attendance> {
        return this.attendanceService.updateAttendance(id, updateAttendanceDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deleta um registro de ponto' })
    @ApiResponse({ status: 204, description: 'Registro de ponto deletado com sucesso' })
    async deleteAttendance(@Param('id') id: number): Promise<void> {
        return this.attendanceService.deleteAttendance(id);
    }
}
