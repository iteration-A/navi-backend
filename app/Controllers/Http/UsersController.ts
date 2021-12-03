import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import CreateUserValidator from 'App/Validators/CreateUserValidator';

export default class UsersController {
  async store({ request }: HttpContextContract) {
    const body = await request.validate(CreateUserValidator);

    const user = await User.create(body);

    return user
  }
}
