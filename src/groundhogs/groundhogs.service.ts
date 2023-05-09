import { CreateGroundhogDto } from './dto/create-groundhog.dto';
import { Groundhog } from './entities/groundhog.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateGroundhogDto } from './dto/update-groundhog.dto';

@Injectable()
export class GroundhogsService {
  constructor(
    @InjectRepository(Groundhog)
    private repository: Repository<Groundhog>,
  ) {}

  async create(input: CreateGroundhogDto) {
    const newItem = this.repository.create(input);
    return await this.repository.save(newItem);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  async update(id: number, input: UpdateGroundhogDto) {
    await this.repository.update(id, input);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }
}
