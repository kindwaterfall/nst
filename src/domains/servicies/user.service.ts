import { UserQuery } from "../ports/ingress/user.query";

export class UserDomainService implements UserQuery{
  createSignature(signature: string) {
    return '';
  }
}