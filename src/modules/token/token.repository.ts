import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Token } from './entities/token.entity';
import { IToken } from './interfaces/token.interface';

@Injectable()
export class TokenRepository {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}

  public async getAll(): Promise<IToken[]> {
    return await this.tokenRepository.find();
  }
}
