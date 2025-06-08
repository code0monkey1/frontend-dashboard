import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { logoutFromServer } from "../http/api";
import { useAuthStore } from "../store";

export const useLogout = () => {
    const navigate = useNavigate();
    const { logout } = useAuthStore();

    const { mutate: logoutUser, isPending } = useMutation({
        mutationKey: ["logout"],
        mutationFn: logoutFromServer,
        onSuccess: () => {
            logout(); // Clear the store
            navigate("/auth/login"); // Redirect to login page
        }
    });

    return {
        logout: logoutUser,
        isLoggingOut: isPending
    };
};