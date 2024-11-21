import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ description: 'Tipo do usuário (admin ou funcionario)', required: false })
    tipo?: string;
}
