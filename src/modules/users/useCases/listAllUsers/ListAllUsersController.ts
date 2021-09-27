import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    let all = [];
    try {
      all = this.listAllUsersUseCase.execute(user_id);
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
    return response.status(201).json(all);
  }
}

export { ListAllUsersController };
