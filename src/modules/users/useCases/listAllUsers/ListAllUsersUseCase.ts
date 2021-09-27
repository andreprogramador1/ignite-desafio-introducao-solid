import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// interface IRequest {
//   user_id: string;
// }

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id): User[] {
    const user = this.usersRepository.findById(user_id);
    console.log("AQUIII3", user);

    if (!user || user.admin === false) {
      throw new Error("You're not admin!");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
