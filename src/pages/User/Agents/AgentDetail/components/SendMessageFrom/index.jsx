import React from 'react';
import "./styles.scss"
import { Form, Input, Popover } from 'antd';
import ButtonSubmit from '../../../../../../components/Button'


function SendMessageFrom(props) {
    const content = (
        <div className="popup-content-wrapper">
            <ul className="popup-content">
                <li><i className="fas fa-phone"></i>Call Agent</li>
                <li><i className="fas fa-th-list"></i>Send Message</li>
                <li><i className="fas fa-star"></i>Book Tour</li>
            </ul>
        </div>
    );
    return (
        <div className="send-message-form-wrapper">
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <Form className="form">
                <Form.Item name="email" >
                    <Input placeholder="Địa chỉ Email" />
                </Form.Item>
                <Form.Item name="phone" >
                    <Input placeholder="Số điện thoại" />
                </Form.Item>
                <Form.Item name="message" >
                    <Input placeholder="Tin nhắn..." />
                </Form.Item>
                <Form.Item >
                    <ButtonSubmit value="Gửi tin nhắn" className="submit" />
                </Form.Item>
            </Form>

        </div>
    );
}

export default SendMessageFrom;