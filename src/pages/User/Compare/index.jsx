import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CardCompare from './components/CardCompare';
import jwt_decode from "jwt-decode";
import "./styles.scss"
import { changeCompare } from '../../../actions/user';



function Compare(props) {

    const [list, setList] = useState([])
    const history = useHistory()
    const [token, setToken] = useState(localStorage.getItem('access_token'));
    const dispatch = useDispatch()
    const listDetailCompare = useSelector(state => ([...state.user.listDetailCompare]))

    useEffect(() => {
        var params = history.location.pathname.slice(9).split(",").map(Number);
        if (params.length >= 2) {
            dispatch(changeCompare(params));
        } else {
            history.push("/404")
        }
    }, [])

    useEffect(() => {
        if (listDetailCompare.length >= 2 && list.length === 0) {
            setList(listDetailCompare);
        }
    }, [listDetailCompare])



    return (
        <div className="main-compare">
            <div className="sub-header">
                <div className="container">
                    <div className="subheader-inner">
                        <h1 className="title">{props.title}</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a>
                                        <i className="fas fa-home"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    {props.title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-compare">
                <div className="title">
                    Tổng quan các bất động sản
                </div>
                {list.length === 3 ?
                    <Row>
                        <Col span={8}>
                            <CardCompare item={list[0]} />
                        </Col>
                        <Col span={8}>
                            <CardCompare item={list[1]} />
                        </Col>
                        <Col span={8}>
                            <CardCompare item={list[2]} />
                        </Col>
                    </Row>
                    : list.length === 2 ?
                        <Row>
                            <Col offset={1} span={10}>
                                <CardCompare item={list[0]} />
                            </Col>
                            <Col offset={2} span={10}>
                                <CardCompare item={list[1]} />
                            </Col>

                        </Row>
                        : null
                }
            </div>
        </div>
    );
}

export default Compare;