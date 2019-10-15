export class Signup {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfig: string;
    dateOfBirth: Date;
    phone: string;
    country: string;
    state: string;
    locality: string;
    neighborhood: string;
    street: string;
    address?: string
}

export class Signin {
    email: string;
    password: string;
}

export class Updatepass{
    passone: string; 
    passtwo: string;
    passthree: string;

}

export class Update {
    phone: string;
    state: string;
    locality: string;
    neighborhood: string;
    street: string;
    address?: string
}
 