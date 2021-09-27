import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// interface IRequest {
//   user_id: string;
// }

class DeleteAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    // const user = this.usersRepository.findById(user_id);

    return this.usersRepository.delete();
  }
}

export { DeleteAllUsersUseCase };
