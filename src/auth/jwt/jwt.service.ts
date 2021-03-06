import { Injectable } from '@nestjs/common';
import { JwtService as Jwt } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../entities/auth.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class JwtService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
    private readonly jwt: Jwt,
  ) {}

  public async decode(token: string): Promise<unknown> {
    return this.jwt.decode(token);
  }

  public async validateUser(decoded: any): Promise<Auth> {
    return this.authRepository.findOne({ where: { id: decoded.id } });
  }

  public generateToken(auth: Auth): string {
    return this.jwt.sign({ id: auth.id, email: auth.email });
  }

  public isPasswordValid(password: string, userPassword: string): boolean {
    return bcrypt.compareSync(password, userPassword);
  }

  public encodePassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  public async verifyToken(token: string): Promise<any> {
    try {
      return this.jwt.verify(token);
    } catch (error) {
      console.log(error);
    }
  }
}
