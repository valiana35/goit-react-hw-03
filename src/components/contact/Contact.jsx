const Contact = ({ data: { name, number, id }, onDelete }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{number}</p>
            <button type="button" onClick={() => onDelete(id)} >Delete</button>
        </div>
    );
}

export default Contact;