import { ROLES } from "../types";


export const usePermission = () => {

    const allowedRoles = [ROLES.ADMIN,ROLES.MANAGER]
    
    const hasPermission=(role: string)=>allowedRoles.some(_role => role===_role)


    return {
        hasPermission
    }
};