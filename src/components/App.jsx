import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "./hook/useAuth";
import { refreshUser } from "redux/auth/operationst";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./Layout/SharedLayout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
                <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
                <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
            </Route>
        </Routes>
    );
};