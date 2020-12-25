import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  authenticate(username, password) {
    const params = new URLSearchParams();

    const data = {
      username: username,
      password: password,
      client_id: this.configService.get<string>('auth.audience'),
      grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
      realm: 'Username-Password-Authentication',
    };

    params.append('username', username);
    params.append('password', password);
    params.append('client_id', data.client_id);
    params.append('grant_type', data.grant_type);
    params.append('realm', data.realm);

    return this.httpService.post(
      'https://aryashahali.eu.auth0.com/oauth/token',
      params,
    );
  }
}
