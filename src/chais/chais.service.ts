import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Chai } from './entities/chai.entities';

@Injectable()
export class ChaisService {
  private chais: Chai[] = [
    {
      id: '1',
      name: 'lemon',
      brand: 'lipton',
      flavours: ['lemon', 'lime'],
    },
  ];
  findAll() {
    return this.chais;
  }
  findOne(id: string) {
    const chai = this.chais.find((el) => el.id === id);
    if (!chai) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return chai;
  }
  create(newchai) {
    this.chais.push(newchai);
    return newchai;
  }
  update(id: string, updateChai: any) {
    const chai = this.chais.find((el) => el.id === id);
    if (chai) {
      chai.brand = updateChai.brand;
      chai.name = updateChai.name;
      chai.flavours = updateChai.flavours;
      return;
    }
  }

  remove(id: string) {
    const chai = this.chais.find((el) => el.id === id);
    if (chai) {
      const index = this.chais.indexOf(chai);
      this.chais.splice(index, 1);
    }
  }
}
