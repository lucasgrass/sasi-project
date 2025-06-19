import { IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {

    @IsBoolean()
    @ApiProperty()
    completed: boolean;
}
