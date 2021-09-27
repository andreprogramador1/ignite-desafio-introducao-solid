import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { DeleteAllUsersController } from "./DeleteAllUsersController";
import { DeleteAllUsersUseCase } from "./DeleteAllUsersUseCase";

const usersRepository = UsersRepository.getInstance();
const deleteAllUsersUseCase = new DeleteAllUsersUseCase(usersRepository);
const deleteAllUsersController = new DeleteAllUsersController(
  deleteAllUsersUseCase
);

export { deleteAllUsersController };
