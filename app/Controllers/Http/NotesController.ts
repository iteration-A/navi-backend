import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Note from "App/Models/Note";
import CreateNoteValidator from "App/Validators/CreateNoteValidator";

export default class NotesController {
  async index({ auth }: HttpContextContract) {
    return await Note.query().where("user_id", auth.user!.id);
  }

  async update({ auth, request, response }: HttpContextContract) {
    const { notes } = await request.validate(CreateNoteValidator);
    await Note.createMany(
      notes.map((note) => ({ ...note, userId: auth.user!.id }))
    );
    response.status(201);

    return notes;
  }
}
