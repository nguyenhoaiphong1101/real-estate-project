import { Form, Input, Popover } from 'antd';
import React from 'react';
import ButtonSubmit from '../../../../../../components/Button';
import './styles.scss';

function ContactForm() {
    const content = (
        <div className="popup-content-wrapper">
            <ul className="popup-content">
                <li><i class="fas fa-phone"></i>Call Agent</li>
                <li><i class="fas fa-th-list"></i>Send Message</li>
                <li><i class="fas fa-star"></i>Book Tour</li>
            </ul>
        </div>
    );
    return (
        <div className="contact-form-wrapper">
            <h5>Meet The Agent</h5>
            <div className="media">
                <a>
                    <img src="http://androthemes.com/themes/react/acres/assets/img/listing-single/6.jpg" alt="agent" />
                </a>
                <div className="media-body">
                    <h6>
                        Freddy Burben
                    </h6>
                    <span>Company Agent</span>
                </div>
                <Popover className="popup" content={content} trigger="click">
                    <i className="fas fa-ellipsis-v">
                    </i>
                </Popover>
            </div>
            <Form className="form">
                <Form.Item name="email" >
                    <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item name="phone" >
                    <Input placeholder="Phone Number" />
                </Form.Item>
                <Form.Item name="message" >
                    <Input placeholder="Enter Your Messages" />
                </Form.Item>
                <Form.Item >
                    <ButtonSubmit value="Send Message" className="submit" />
                </Form.Item>
            </Form>

        </div>
    );
}

export default ContactForm;