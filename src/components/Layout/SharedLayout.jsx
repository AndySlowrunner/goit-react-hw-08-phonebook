import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from '../../hook/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { StyledHeder } from './SharedLayout.styled';

export const SharedLayout = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div>
            <StyledHeder>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </StyledHeder>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};
