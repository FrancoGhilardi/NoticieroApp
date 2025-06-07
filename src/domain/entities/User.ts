export class User {
  constructor(
    public readonly address: {
      city: string;
      geo: { lat: string; lng: string };
      street: string;
      suite: string;
      zipcode: string;
    },
    public readonly company: {
      bs: string;
      catchPhrase: string;
      name: string;
    },
    public readonly email: string,
    public readonly id: number,
    public readonly name: string,
    public readonly phone: string,
    public readonly username: string,
    public readonly website: string
  ) {}
}
