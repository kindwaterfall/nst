export class User {
  constructor(
    private readonly _id: string,
    private readonly _name: number,
    private readonly _password: number,
    private readonly _group: number
  ) {}

  createSignature(signature: string): string {
    return '';
  }

  replacePassword(pass: string): boolean {
    return true;
  }
}
