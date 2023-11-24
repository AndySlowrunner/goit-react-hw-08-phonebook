import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { useAuth } from "./hook/useAuth";
import { UserMenu } from "./UserMenu/UserMenu";
import { AuthNav } from "./AuthNav/AuthNav";

export const SharedLayout = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div>
            <header>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>

    )
};