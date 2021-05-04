import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section>
            <h1 className="text-center mt-5 pt-2">Contact Me</h1>
            <div className="container contact-us">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Subject</label>
                        <input type="email" className="form-control" placeholder="Enter subject" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Message</label>
                        <textarea className="form-control" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos dolorum corporis quod, fugiat officiis commodi? Deserunt quidem itaque laborum quasi ducimus! Perspiciatis qui ratione, ad eius voluptatibus unde. Velit, consequatur culpa. Incidunt, optio voluptatem? illo explicabo omnis! Officiis tempore quod nemo harum vero.</p>
        </section>
    );
};

export default Contact;