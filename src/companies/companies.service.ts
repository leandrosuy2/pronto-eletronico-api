import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>,
    ) { }

    async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
        const newCompany = this.companyRepository.create(createCompanyDto);
        return this.companyRepository.save(newCompany);
    }

    async findAll(): Promise<Company[]> {
        return this.companyRepository.find();
    }

    async findOne(id: number): Promise<Company> {
        const company = await this.companyRepository.findOne({ where: { id } });
        if (!company) throw new NotFoundException('Empresa não encontrada');
        return company;
    }

    async updateCompany(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
        await this.companyRepository.update(id, updateCompanyDto);
        return this.findOne(id);
    }

    async deleteCompany(id: number): Promise<void> {
        const result = await this.companyRepository.delete(id);
        if (result.affected === 0) throw new NotFoundException('Empresa não encontrada');
    }
}
