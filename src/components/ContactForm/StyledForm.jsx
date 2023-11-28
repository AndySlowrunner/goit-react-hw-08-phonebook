import styled from 'styled-components';
import { Form } from "formik";

export const StyledForm = styled(Form)`
    margin: 0px auto;
    width: 320px;

    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ButtomStyle = styled.button`
    width: 86px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;

export const StyledDiv = styled.div`
    >h3{
        display: flex;
        justify-content: center;
        margin-top: 32px;
        margin-bottom: 8px;
    }
`;