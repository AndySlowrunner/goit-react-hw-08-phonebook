import { Filter } from "components/ContactFilter/ContactFilter";
import { ContactForm } from "components/ContactForm/ContactForm";
import { StyledDiv } from "components/ContactForm/StyledForm";
import { ContactList } from "components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";

export const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    return (
        <StyledDiv>
            <h1>Phonebook</h1>
            <ContactForm/>
            <h2>Contacts</h2>
            <Filter/>
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList/>
        </StyledDiv>
    );
 };