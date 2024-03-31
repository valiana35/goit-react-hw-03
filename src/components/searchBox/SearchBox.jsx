import { useId } from "react";
import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
    const searchId = useId();
    return (
        <div className={css.searchBox}>
            <label className={css.labelSearch} htmlFor={searchId}>Find contacts by name</label>
            <input className={css.input} type="text" value={value} id={searchId} onChange={(evt) => onSearch(evt.target.value)} />
        </div>
    );
}

export default SearchBox;