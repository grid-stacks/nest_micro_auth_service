import { Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtService } from './jwt.service';
import { Auth } from '../entities/auth.entity';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(JwtService)
    private readonly jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'secret',
    });
  }

  private validate(token: string): Promise<Auth | never> {
    return this.jwtService.validateUser(token);
  }
}
