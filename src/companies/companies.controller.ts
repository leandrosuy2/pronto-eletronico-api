import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './company.entity';
import { CompanyService } from './companies.service';

@ApiTags('Empresas')
@Controller('companies')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @Post()
    @ApiOperation({ summary: 'Cria uma nova empresa' })
    @ApiResponse({ status: 201, description: 'Empresa criada com sucesso', type: Company })
    createCompany(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
        return this.companyService.createCompany(createCompanyDto);
    }

    @Get()
    @ApiOperation({ summary: 'Lista todas as empresas' })
    @ApiResponse({ status: 200, description: 'Lista de empresas retornada com sucesso', type: [Company] })
    findAll(): Promise<Company[]> {
        return this.companyService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtém detalhes de uma empresa específica' })
    @ApiResponse({ status: 200, description: 'Empresa retornada com sucesso', type: Company })
    findOne(@Param('id') id: number): Promise<Company> {
        return this.companyService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualiza uma empresa existente' })
    @ApiResponse({ status: 200, description: 'Empresa atualizada com sucesso', type: Company })
    updateCompany(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto): Promise<Company> {
        return this.companyService.updateCompany(id, updateCompanyDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deleta uma empresa específica' })
    @ApiResponse({ status: 204, description: 'Empresa deletada com sucesso' })
    async deleteCompany(@Param('id') id: number): Promise<void> {
        return this.companyService.deleteCompany(id);
    }
}
