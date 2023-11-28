import { useAuth } from "components/hook/useAuth";
import { Link } from "./StyledNavigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <Link to="/">
                Home
            </Link>
            {isLoggedIn && (
                <Link to="/contacts">
                    Contacts
                </Link>
            )}
        </nav>
    );
};