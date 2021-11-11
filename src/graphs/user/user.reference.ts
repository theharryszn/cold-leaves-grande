import User from "./user.entity";

export async function resolveUserReference(reference: Pick<User, "id">): Promise<User> {
  const user = await User.findOne(reference.id);

  return user!
}