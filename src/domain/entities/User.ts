export class User {
  constructor(
    public readonly address: {
      city: string;
      geo: { lat: string; lng: string };
      street: string;
      suite: string;
      zipcode: string;
    },
    public readonly birthDate: string,
    public readonly company: {
      bs: string;
      catchPhrase: string;
      name: string;
    },
    public readonly email: string,
    public readonly firstname: string,
    public readonly id: number,
    public readonly lastname: string,
    public readonly login: {
      md5: string;
      password: string;
      registered: string;
      sha1: string;
      username: string;
      uuid: string;
    },
    public readonly phone: string,
    public readonly website: string
  ) {}
}
