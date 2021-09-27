import { Request, Response } from "express";

import { DeleteAllUsersUseCase } from "./DeleteAllUsersUseCase";

class DeleteAllUsersController {
  constructor(private deleteAllUsersUseCase: DeleteAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // const { user_id } = request.headers;
    let all = null;
    try {
      all = this.deleteAllUsersUseCase.execute();
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
    return response.status(201).json(all);
  }
}

export { DeleteAllUsersController };
