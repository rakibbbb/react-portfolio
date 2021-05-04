import React from 'react';
import {
    FaGithub,
    FaCamera,
    FaCircleNotch,
} from "react-icons/fa";
import './Blog.css';

const Blog = () => {
    const [header] = React.useState({
        // mainHeader: "Blogs",
        subHeading: "My Blogs",
        text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting\
        industry. Lorem Ipsum standard dummy text.",
    });

    const [state] = React.useState([
        {
            id: 1,
            icon: <FaGithub className="commonIcons" />,
            heading: "Web Development",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
          industry. simply dummy",
        },
        {
            id: 2,
            icon: <FaCamera className="commonIcons" />,
            heading: "Photography",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
            industry. simply dummy",
        },
        {
            id: 3,
            icon: <FaCircleNotch className="commonIcons" />,
            heading: "Web Design",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
            industry. simply dummy",
        }
    ]);
    return (
        <section id="blog" className="blogs">
            <div className="container">
                <div className="blogs__header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 bgMain">
                                <div className="blogs__box">
                                    {info.icon}
                                    <div className="blogs__box-header">{info.heading}</div>
                                    <div className="blogs__box-p">{info.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;