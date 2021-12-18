import { Button, Col, message, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import jwt_decode from "jwt-decode";
import ItemCompare from './components/ItemCompare';
import "./styles.scss"
import { getListCompare } from '../../api/userApi';
import { changeCompare, changeCompareDetail } from '../../actions/user';



function ListCompare(props) {

    const [collapse, setCollapse] = useState(true);
    const [listItem, setListItem] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('access_token'));

    const dispatch = useDispatch()

    const listCompare = useSelector(state => ([...state.user.listCompare]))

    useEffect(() => {
        if (listCompare?.length !== listItem?.length) {
            if (listCompare.length === 0) {
                setListItem([])
            } else {
                getListCompare.GET({
                    apartment_list: listCompare + '',
                    user_id: token ? jwt_decode(token).id : null,
                }).then(res => { setListItem(res); dispatch(changeCompareDetail(res)); })
            }
        }
    }, [listCompare]);

    const deleteItemCompare = (id) => {
        var list = listCompare.filter(item => item !== id);
        dispatch(changeCompare(list));
    }

    const isCollapse = () => {
        setCollapse(!collapse);
    }

    const history = useHistory();



    const deleteAll = () => {
        dispatch(changeCompare([]));
    }

    const clickCompare = () => {
        if (listItem.length <= 1) {
            message.error("Vui lòng chọn tối thiểu 2 bất động sản cần so sánh !");
        } else {
            if (listItem.length === 2) {
                history.push(`/so-sanh/${listItem[0].id},${listItem[1].id}`)
            } else {
                history.push(`/so-sanh/${listItem[0].id},${listItem[1].id},${listItem[2].id}`)
            }
        }

    }


    return (
        <div>
            {collapse ?
                <div className="list-mini">
                    <p className="title" onClick={isCollapse}>So sánh ({listCompare.length}) <i class="fas fa-angle-right"></i></p>
                </div>
                :
                <div className="list-compare">
                    <div className="button-collapse" onClick={isCollapse}>
                        Thu gọn <i class="fas fa-angle-down"></i>
                    </div>
                    <Row className="cart">
                        <Col span={6}>
                            {listItem ?
                                <ItemCompare item={listItem[0]} deleteItem={deleteItemCompare} />
                                :
                                <ItemCompare item={null} />}
                        </Col>
                        <Col span={6}>
                            {listItem ?
                                <ItemCompare item={listItem[1]} deleteItem={deleteItemCompare} />
                                :
                                <ItemCompare item={null} />}
                        </Col>
                        <Col span={6}>
                            {listItem ?
                                <ItemCompare item={listItem[2]} deleteItem={deleteItemCompare} />
                                :
                                <ItemCompare item={null} />}
                        </Col>
                        <Col className="button-compare" span={6}>
                            <div>
                                <Button className="button-compare" onClick={clickCompare} >So sánh ngay</Button>
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