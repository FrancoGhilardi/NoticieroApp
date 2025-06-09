import { User } from "../../domain/entities/User";

type UserModel = {
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };
  birthDate: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  login: {
    md5: string;
    password: string;
    registered: string;
    sha1: string;
    username: string;
    uuid: string;
  };
  phone: string;
  website: string;
};

export const toUserEntity = (model: UserModel): User =>
  Object.assign(
    new User(
      model.address,
      model.birthDate,
      model.company,
      model.email,
      model.firstname,
      model.id,
      model.lastname,
      model.login,
      model.phone,
      model.website
    ),
    {}
  );
