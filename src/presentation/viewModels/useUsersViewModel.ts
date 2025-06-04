import { use } from "react";
import { UserRepositoryImpl } from "../../data/repositories/UserImplementation";
import { GetUsersList } from "../../domain/useCases/GetUserList";

const getUsersList = new GetUsersList(new UserRepositoryImpl()).execute();

const useUsersViewModel = () => {
  const users = use(getUsersList);
  return { users };
};

export default useUsersViewModel;
