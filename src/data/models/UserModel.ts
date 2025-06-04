import { User } from "../../domain/entities/User";

export const toUserEntity = (data: any): User => ({
  ...data,
});
