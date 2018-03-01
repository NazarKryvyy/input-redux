import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';

let ContactForm = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field name="firstName" component="input" type="text" />
			<Field name="lastName" component="input" type="text" />
			<Field name="email" component="input" type="email" />
			<button type="submit">Submit</button>
		</form>
	);
};

ContactForm = reduxForm({
	// a unique name for the form
	form: 'contact',
})(ContactForm);

export default ContactForm;
