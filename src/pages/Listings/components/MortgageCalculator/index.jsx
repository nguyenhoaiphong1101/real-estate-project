import React from 'react';
import "./styles.scss"
import { Form, Input, Select } from "antd";
import ButtonSubmit from '../../../../components/Button';




function MortgageCalculator(props) {
    return (
        <Form className="form">
            <h5>Mortgage Calculator</h5>
            <Form.Item name="total" >
                <Input placeholder="Total Amount" />
            </Form.Item>
            <Form.Item name="down-p" >
                <Input placeholder="Down Payment" />
            </Form.Item>
            <Form.Item name="interest" >
                <Input placeholder="Interest Rate" />
            </Form.Item>
            <Form.Item name="loan-term" >
                <Input placeholder="Loan Term" />
            </Form.Item>
            <Form.Item name="cycle" >
                <Select className="selected" defaultValue="Daily">
                    <Select.Option value="Daily">Daily</Select.Option>
                    <Select.Option value="Monthly">Monthly</Select.Option>
                    <Select.Option value="Yearly">Yearly</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item >
                <ButtonSubmit value="Calculate" className="submit" />
            </Form.Item>
        </Form>
    );
}

export default MortgageCalculator;