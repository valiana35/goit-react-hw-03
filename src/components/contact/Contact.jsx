import { FaUser, FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
        <div className={css.contact}>
            <h2 className={css.name}><FaUser />{name}</h2>
            <p className={css.number}><FaPhone />{number}</p>
            <button className={css.deleteBtn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default Contact;