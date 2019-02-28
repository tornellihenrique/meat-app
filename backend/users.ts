export class User {

  constructor(
    public email: string,
    public name: string,
    public password: string
    ) {}

  matches(another: User): boolean {
    return  another !== undefined &&
            another.email === this.email &&
            another.password === this.password
  }
}


export const users: {[key: string]: User} = {
  "tornelli.henrique@gmail.com": new User('tornelli.henrique@gmail.com', 'Henrique', 'henrique123'),
  "jose@gmail.com": new User('jose@gmail.com', 'Jose', 'jose123')
}
