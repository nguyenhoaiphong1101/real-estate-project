import React from 'react';
import "./styles.scss"
import { Form, Input, Select } from "antd";
import ButtonSubmit from '../../../../components/Button';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function MortgageCalculator(props) {
    return (
        <Collapse defaultActiveKey={['1']} className="collapse collapse-mortgage">
            <Panel header={<h5 className="title">Tính toán thế chấp</h5>} key="1">
                <div className="filter-listings">
                    <Form className="form">
                        <Form.Item name="total" >
                            <Input placeholder="Tổng" />
                        </Form.Item>
                        <Form.Item name="down-p" >
                            <Input placeholder="Tiền đặt cọc" />
                        </Form.Item>
                        <Form.Item name="interest" >
                            <Input placeholder="Lãi suất" />
                        </Form.Item>
                        <Form.Item name="loan-term" >
                            <Input placeholder="Thời hạn cho vay" />
                        </Form.Item>
                        <Form.Item name="cycle" >
                            <Select className="selected" defaultValue="Daily">
                                <Select.Option value="Daily">Ngày</Select.Option>
                                <Select.Option value="Monthly">Tháng</Select.Option>
                                <Select.Option value="Yearly">Năm</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item >
                            <ButtonSubmit value="Tính toán" className="submit" />
                        </Form.Item>
                    </Form>
                </div>

            </Panel>

        </Collapse>

    );
}

export default MortgageCalculator;