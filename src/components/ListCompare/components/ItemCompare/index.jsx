import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { API_URL } from '../../../../constants/Config';
import "./styles.scss"

function ItemCompare(props) {
    const [visible, setVisible] = useState(false)

    const detele = () => {
        props?.deleteItem(props.item.id);
    }

    const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;



    return (
        <>
            {props.item ?
                <div className="item-compare">
                    <i class="icon fas fa-times" onClick={detele}></i>
                    <img className="img" alt='hình' src="https://thietkenoithat.com/Portals/0/xNews/uploads/2017/9/1/mau-thiet-ke-biet-thu-kinh-sang-trong-cao-cap3.jpg"></img>
                    <p className="title">{props.item.title}</p>
                </div>
                :
                <div className="item-compare">
                    <i class="icon-add far fa-plus-square" onClick={() => { setVisible(true) }}></i>
                    <p className="title-add">Thêm sản phẩm</p>
                </div>
            }
            <Modal
                visible={visible}
                title="Thêm bất động sản"
                onOk={() => { setVisible(false) }}
                onCancel={() => { setVisible(false) }}
                footer={[

                    <Button style={{ backgroundColor: "#0088a9", color: "#fff" }} onClick={() => { setVisible(false) }}>
                        Xác nhận
                    </Button>,
                ]}
            >
                <div className="modal-search">
                    <Input.Search placeholder="Nhập tên sản phẩm" style={{ width: "100%" }} />

                </div>
            </Modal>
        </>
    );
}

export default ItemCompare;