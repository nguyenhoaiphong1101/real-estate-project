import { Form, Input, Popover } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import ButtonSubmit from '../../../../../../../components/Button';
import { API_URL } from '../../../../../../../constants/Config';
import './styles.scss';

function ContactForm() {
    const detailHome = useSelector(state => state.detailhome.detailHome)
    const content = (
        <div className="popup-content-wrapper">
            <ul className="popup-content">
                <li><i class="fas fa-phone"></i>Call Agent</li>
                <li><i class="fas fa-th-list"></i>Send Message</li>
                <li><i class="fas fa-star"></i>Book Tour</li>
            </ul>
        </div>

    );
    const getPhotosImgAvatar = (name) => `${API_URL}/public/image/avatar/${name}`;
    return (
        <div className="contact-form-wrapper">
            <h5>Gặp gỡ đại lý</h5>
            <div className="media">
                <a>
                    <img src={detailHome?.author?.avatar?.name ? getPhotosImgAvatar(detailHome?.author?.avatar?.name) : "https://lh3.googleusercontent.com/proxy/-leE7hK7HNnHvhUaXXj3XCxJpaqc2gVCm7U2m4-iA4UyQwocXrfHEVBqujHobCMqnG_3XDgMKmB3r9RozmQrZP7U1cjGcXc"} alt="agent" />
                </a>
                <div className="media-body">
                    <h6>
                        {detailHome?.author?.full_name}
                    </h6>
                    <span>{detailHome?.author?.email}</span>
                </div>
                <Popover className="popup" content={content} trigger="click">
                    <i className="fas fa-ellipsis-v">
                    </i>
                </Popover>
            </div>
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

export default ContactForm;