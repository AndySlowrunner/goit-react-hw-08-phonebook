import { useDispatch, useSelector } from "react-redux";
import { StyledFilter } from "./StyledFilter";
import { setFilter } from "redux/filterSlice";
import { selectFilter, selectVisibleContacts } from "redux/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectFilter);
    const checkList = useSelector(selectVisibleContacts);
    console.log(checkList.length);

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <>
            {checkList.length > 0 ? (
                <StyledFilter>
                    <label>Find contacts by name</label>
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                </StyledFilter>) : (<p>Please, add your contacts!</p>)}
        </>
    );
}