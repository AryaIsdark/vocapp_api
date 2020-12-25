import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy as BaseStrategy, ExtractJwt } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(BaseStrategy) {
  constructor(configService: ConfigService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://aryashahali.eu.auth0.com/.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: 'r1RuBGYNfOMUSryt6XqrLhO0IzdM6UkW',
      issuer: `https://aryashahali.eu.auth0.com/`,
      algorithms: ['RS256'],
    });
  }

  validate(payload: JwtPayload): JwtPayload {
    // const minimumScope = ['openid', 'profile', 'email'];
    // console.log(payload);
    // if (
    //   payload?.scope
    //     ?.split(' ')
    //     .filter((scope) => minimumScope.indexOf(scope) > -1).length !== 3
    // ) {
    //   throw new UnauthorizedException(
    //     'JWT does not possess the required scope (`openid profile email`).',
    //   );
    // }

    return payload;
  }
}
