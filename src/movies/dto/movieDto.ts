import { ApiProperty } from '@nestjs/swagger';
export class MovieDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
