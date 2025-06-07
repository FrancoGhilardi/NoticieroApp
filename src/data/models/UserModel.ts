import { User } from "../../domain/entities/User";

type UserModel = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
};

export const toUserEntity = (model: UserModel): User =>
  Object.assign(
    new User(
      model.address,
      model.company,
      model.email,
      model.id,
      model.name,
      model.phone,
      model.username,
      model.website
    ),
    {}
  );
