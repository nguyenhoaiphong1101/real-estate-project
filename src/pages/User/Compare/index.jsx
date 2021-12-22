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
    const [rankFirst, setRankFirst] = useState({})
    const [rankSecond, setRankSecond] = useState({})
    const [rankThird, setRankThird] = useState({})
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

    const calRank = (a, b) => {
        var maxInNumbers = Math.max.apply(Math, a);
        var minInNumbers = Math.min.apply(Math, a);
        if (a.length === 2) {
            if (b === maxInNumbers) {
                if (b === minInNumbers)
                    return 1;
                else return 2;
            } else return 0;
        } else if (a.length === 3) {
            if (a.filter(item => item === b).length === 3) {
                return 1;
            } else if (a.filter(item => item === b).length === 2) {
                if (b === maxInNumbers) {
                    return 2;
                } else {
                    return 0;
                }
            } else {
                if (b === maxInNumbers) {
                    return 2;
                } else if (b === minInNumbers) {
                    return 0;
                } else {
                    return 1;
                }
            }
        }
    }

    useEffect(() => {
        if (listDetailCompare.length >= 2 && list.length === 0) {
            if (listDetailCompare.length === 2) {
                setRankFirst({
                    price: calRank([listDetailCompare[0].total_price, listDetailCompare[1].total_price], listDetailCompare[0].total_price),
                    bath: calRank([listDetailCompare[0].bathroom_quantity, listDetailCompare[1].bathroom_quantity], listDetailCompare[0].bathroom_quantity),
                    bed: calRank([listDetailCompare[0].bedroom_quantity, listDetailCompare[1].bedroom_quantity], listDetailCompare[0].bedroom_quantity),
                    floor: calRank([listDetailCompare[0].floor_quantity, listDetailCompare[1].floor_quantity], listDetailCompare[0].floor_quantity),
                    toilet: calRank([listDetailCompare[0].toilet_quantity, listDetailCompare[1].toilet_quantity], listDetailCompare[0].toilet_quantity),
                    area: calRank([listDetailCompare[0].area, listDetailCompare[1].area], listDetailCompare[0].area),
                });
                setRankSecond({
                    price: calRank([listDetailCompare[0].total_price, listDetailCompare[1].total_price], listDetailCompare[1].total_price),
                    bath: calRank([listDetailCompare[0].bathroom_quantity, listDetailCompare[1].bathroom_quantity], listDetailCompare[1].bathroom_quantity),
                    bed: calRank([listDetailCompare[0].bedroom_quantity, listDetailCompare[1].bedroom_quantity], listDetailCompare[1].bedroom_quantity),
                    floor: calRank([listDetailCompare[0].floor_quantity, listDetailCompare[1].floor_quantity], listDetailCompare[1].floor_quantity),
                    toilet: calRank([listDetailCompare[0].toilet_quantity, listDetailCompare[1].toilet_quantity], listDetailCompare[1].toilet_quantity),
                    area: calRank([listDetailCompare[0].area, listDetailCompare[1].area], listDetailCompare[1].area),
                });
            } else if (listDetailCompare.length === 3) {
                setRankFirst({
                    price: calRank([listDetailCompare[0].total_price, listDetailCompare[1].total_price, listDetailCompare[2].total_price], listDetailCompare[0].total_price),
                    bath: calRank([listDetailCompare[0].bathroom_quantity, listDetailCompare[1].bathroom_quantity, listDetailCompare[2].bathroom_quantity], listDetailCompare[0].bathroom_quantity),
                    bed: calRank([listDetailCompare[0].bedroom_quantity, listDetailCompare[1].bedroom_quantity, listDetailCompare[2].bedroom_quantity], listDetailCompare[0].bedroom_quantity),
                    floor: calRank([listDetailCompare[0].floor_quantity, listDetailCompare[1].floor_quantity, listDetailCompare[2].floor_quantity], listDetailCompare[0].floor_quantity),
                    toilet: calRank([listDetailCompare[0].toilet_quantity, listDetailCompare[1].toilet_quantity, listDetailCompare[2].toilet_quantity], listDetailCompare[0].toilet_quantity),
                    area: calRank([listDetailCompare[0].area, listDetailCompare[1].area, listDetailCompare[2].area], listDetailCompare[0].area),
                });
                setRankSecond({
                    price: calRank([listDetailCompare[0].total_price, listDetailCompare[1].total_price, listDetailCompare[2].total_price], listDetailCompare[1].total_price),
                    bath: calRank([listDetailCompare[0].bathroom_quantity, listDetailCompare[1].bathroom_quantity, listDetailCompare[2].bathroom_quantity], listDetailCompare[1].bathroom_quantity),
                    bed: calRank([listDetailCompare[0].bedroom_quantity, listDetailCompare[1].bedroom_quantity, listDetailCompare[2].bedroom_quantity], listDetailCompare[1].bedroom_quantity),
                    floor: calRank([listDetailCompare[0].floor_quantity, listDetailCompare[1].floor_quantity, listDetailCompare[2].floor_quantity], listDetailCompare[1].floor_quantity),
                    toilet: calRank([listDetailCompare[0].toilet_quantity, listDetailCompare[1].toilet_quantity, listDetailCompare[2].toilet_quantity], listDetailCompare[1].toilet_quantity),
                    area: calRank([listDetailCompare[0].area, listDetailCompare[1].area, listDetailCompare[2].area], listDetailCompare[1].area),
                });
                setRankThird({
                    price: calRank([listDetailCompare[0].total_price, listDetailCompare[1].total_price, listDetailCompare[2].total_price], listDetailCompare[2].total_price),
                    bath: calRank([listDetailCompare[0].bathroom_quantity, listDetailCompare[1].bathroom_quantity, listDetailCompare[2].bathroom_quantity], listDetailCompare[2].bathroom_quantity),
                    bed: calRank([listDetailCompare[0].bedroom_quantity, listDetailCompare[1].bedroom_quantity, listDetailCompare[2].bedroom_quantity], listDetailCompare[2].bedroom_quantity),
                    floor: calRank([listDetailCompare[0].floor_quantity, listDetailCompare[1].floor_quantity, listDetailCompare[2].floor_quantity], listDetailCompare[2].floor_quantity),
                    toilet: calRank([listDetailCompare[0].toilet_quantity, listDetailCompare[1].toilet_quantity, listDetailCompare[2].toilet_quantity], listDetailCompare[2].toilet_quantity),
                    area: calRank([listDetailCompare[0].area, listDetailCompare[1].area, listDetailCompare[2].area], listDetailCompare[2].area),
                });
            }
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
                            <CardCompare rank={rankFirst} item={list[0]} />
                        </Col>
                        <Col span={8}>
                            <CardCompare rank={rankSecond} item={list[1]} />
                        </Col>
                        <Col span={8}>
                            <CardCompare rank={rankThird} item={list[2]} />
                        </Col>
                    </Row>
                    : list.length === 2 ?
                        <Row>
                            <Col offset={1} span={10}>
                                <CardCompare rank={rankFirst} item={list[0]} />
                            </Col>
                            <Col offset={2} span={10}>
                                <CardCompare rank={rankSecond} item={list[1]} />
                            </Col>

                        </Row>
                        : null
                }
            </div>
        </div>
    );
}

export default Compare;