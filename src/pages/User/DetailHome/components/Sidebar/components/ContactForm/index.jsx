import React from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../../../../../../constants/Config";
import "./styles.scss";
import Img from "../../../../../../../assets/images/noavatar.png";

function ContactForm() {
  const detailHome = useSelector((state) => state.detailhome.detailHome);
  console.log(detailHome);
  const content = (
    <div className="popup-content-wrapper">
      <ul className="popup-content">
        <li>
          <i className="fas fa-phone"></i>Call Agent
        </li>
        <li>
          <i className="fas fa-th-list"></i>Send Message
        </li>
        <li>
          <i className="fas fa-star"></i>Book Tour
        </li>
      </ul>
    </div>
  );
  const getPhotosImgAvatar = (name) => `${API_URL}/public/image/avatar/${name}`;
  return (
    <div className="contact-form-wrapper">
      <h5>Thông tin chủ hộ</h5>
      <div className="media">
        <a>
          <img
            src={
              detailHome?.author?.avatar?.name
                ? getPhotosImgAvatar(detailHome?.author?.avatar?.name)
                : Img
            }
            alt="agent"
          />
        </a>
        <div className="media-body">
          <h6>{detailHome?.author?.full_name}</h6>
          <span>{detailHome?.author?.email}</span>
          <span className="phone">0968836182{detailHome?.author?.phone}</span>
        </div>
        {/* <Popover className="popup" content={content} trigger="click">
          <i className="fas fa-ellipsis-v"></i>
        </Popover> */}
      </div>
      {/* <Form className="form">
        <Form.Item name="email">
          <Input placeholder="Địa chỉ Email" />
        </Form.Item>
        <Form.Item name="phone">
          <Input placeholder="Số điện thoại" />
        </Form.Item>
        <Form.Item name="message">
          <Input placeholder="Tin nhắn..." />
        </Form.Item>
        <Form.Item>
          <ButtonSubmit value="Gửi tin nhắn" className="submit" />
        </Form.Item>
      </Form> */}
    </div>
  );
}

export default ContactForm;
