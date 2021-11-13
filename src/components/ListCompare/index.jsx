import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import ItemCompare from './components/ItemCompare';
import "./styles.scss"



function ListCompare(props) {

    const [collapse, setCollapse] = useState(true);
    const [isItem, setIsItem] = useState();
    const [isAll, setIsAll] = useState();

    const isCollapse = () => {
        setCollapse(!collapse);
    }

    const history = useHistory();

    const item1 = {
        id: 1,
        src: "https://neohouse.vn/wp-content/uploads/2020/06/biet-thu-dep-nhat-viet-nam-1.jpg",
        title: "Nhà quận 9 - TPHCM"
    }
    const item2 = {
        id: 2,
        src: "https://legoland.com.vn/wp-content/uploads/2020/08/Bi%E1%BB%87t-th%E1%BB%B1-min.jpg",
        title: "Nhà quận Bình Thạnh - TPHCM"
    }
    const item3 = {
        id: 3,
        src: "https://thietkenoithat.com/Portals/0/xNews/uploads/2017/9/1/mau-thiet-ke-biet-thu-kinh-sang-trong-cao-cap3.jpg",
        title: "Nhà quận 7 - TPHCM"
    }

    const deleteItem = (id) => {
        setIsItem(id);
        console.log(id);
    }

    const deleteAll = () => {
        setIsAll(true);
    }


    return (
        <div>
            {collapse ?
                <div className="list-mini">
                    <p className="title" onClick={isCollapse}>So sánh (3) <i class="fas fa-angle-right"></i></p>
                </div>
                :
                <div className="list-compare">
                    <div className="button-collapse" onClick={isCollapse}>
                        Thu gọn <i class="fas fa-angle-down"></i>
                    </div>
                    <Row className="cart">
                        <Col span={6}><ItemCompare item={isAll ? null : item1} /></Col>
                        <Col span={6}><ItemCompare item={isAll ? null : item2} /></Col>
                        {isItem === 3 || isAll ?
                            <Col span={6}><ItemCompare item={null} /></Col>
                            :
                            <Col span={6}><ItemCompare isDelete={deleteItem} item={item3} /></Col>
                        }
                        <Col className="button-compare" span={6}>
                            <div>
                                <Button className="button-compare" onClick={() => { history.push("/so-sanh") }} >So sánh ngay</Button>
                                <span className="clear" onClick={deleteAll}>Xóa các lựa chọn</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            }
        </div>



    );
}

export default ListCompare;