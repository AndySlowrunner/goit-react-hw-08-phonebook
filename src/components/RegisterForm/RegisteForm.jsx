import { useDispatch } from "react-redux";
import { register } from "redux/auth/operationst";
import { StyledForm, StyledLabel } from "./StyledRegisterForm";

export const RegisterForm = () => {
  const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget.elements;
        dispatch(
            register({
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
            })
        );
        form.reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <h4>Registration</h4>
            <StyledLabel>
                Username
                <input type="text" name="name" />
            </StyledLabel>
            <StyledLabel>
                Email
                <input type="email" name="email" />
            </StyledLabel>
            <StyledLabel>
                Password
                <input type="password" name="password" />
            </StyledLabel>
            <button type="submit">Register</button>
        </StyledForm>
    );
};