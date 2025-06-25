export interface LoginCreadentials{
    email:string,
    password:string
}

// this is a read only object , as it's values cannot be changed as it's a const object
export const ROLES = {
    CUSTOMER: 'customer',
    ADMIN: 'admin',
    MANAGER: 'manager',
} as const;


export  type User={
                firstName:string,
                lastName:string,
                id:number
            }