import { useAuth } from 'hook/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationst';
import { Username, Wrapper } from './StyledUserMenu';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Wrapper>
            <Username>Welcome, {user.name}</Username>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </Wrapper>
    );
};
