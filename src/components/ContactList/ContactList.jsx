import { useDispatch, useSelector } from "react-redux"
import { StyledList, StyledUl } from "./StyledList"
import { selectVisibleContacts } from "redux/selectors"
import { deleteContact } from "redux/operations";

export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();

    return (
        <StyledUl>
            {contacts.map(({name, number, id}) =>
                <StyledList key={id}>
                    <p>{name}:{' ' + number}</p>
                    <button onClick={() => {
                        dispatch(deleteContact(id));
                    }}>Delete</button>
                </StyledList>
            )}
        </StyledUl>
    )
}