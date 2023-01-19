import { UserInputError } from 'apollo-server-errors'

// TODO:: Type this
// TODO:: Named params this
export const getUser = async (email: string, password: string, model: any) => {
  const user = (await model).User.findOne({
    where: {
      email: email,
      password: password
    }
  })
  if (!user) throw new UserInputError(`Cannot find a User with email: ${email}, or wrong password.`)
  return user
}
