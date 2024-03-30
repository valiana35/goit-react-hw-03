import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";

const FeedBackSchema = Yup.object().shape({
    name: Yup.string().trim().min(2, "Too short!").max(60, "Too long!").required("Required"),
    number: Yup.number().min(2, "Too short!").required("Required"),
});

const initialContakts = {
    name: "",
    number: "",
};

const ContactForm = ({onAdd}) => {

    const nameFieldId = useId();
    const numberField = useId();

    const handleSubmit = (evt, values, actions) => {
        console.log(values);
        onAdd({ 
            id: Date.now(), 
            name: evt.target.elements.name.value, 
            number: evt.target.elements.number.value
        });
        actions.resetForm();
    };

    return (
        <Formik
           initialValues={initialContakts}
           onSubmit={handleSubmit}
           validationSchema={FeedBackSchema}
           >
            <Form>
                <div>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="userName" as="span" />
                </div>
                <div>
                    <label htmlFor={numberField}>Number</label>
                    <Field type="number" name="number" id={numberField} />
                    <ErrorMessage name="number" as="span" />
                </div>
                <button type="submit">Add contact</button>
            </Form>
           </Formik>
    );
}

export default ContactForm;