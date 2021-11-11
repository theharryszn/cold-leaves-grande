import { Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import User from "./user.entity";
import UserService from "./user.service";

@Service()
@Resolver(User)
class UserResolver {
    @Inject()
    userService : UserService;

    @Query(() => [User])
    async users() : Promise<User[]>{
        return await this.userService.users();
    }
}

export default UserResolver