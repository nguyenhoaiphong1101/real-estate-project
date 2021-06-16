import './styles.scss';
import { Row, Col, Input, Form } from 'antd';
import SelectCustom from '../../../../../components/Select';
function Feature({ icon, label, name, onchange }) {

    const typeApartment = [
        {
            id: 'RENT',
            name: 'Cho thuê',
        },
        {
            id: 'BUY',
            name: 'Bán',
        }
    ]


    return (
        <div className="feature">
            <i className={icon}></i>
            <h6 className="feature-label">{label}</h6>
            {name === 'type_apartment' ?
                <Form.Item name={name} className="feature-item">
                    <SelectCustom onHandleChange={onchange} options={typeApartment} />
                </Form.Item>
                :
                <Form.Item name={name}>
                    <Input  className="input"  placeholder={`Thông Tin ${label}`} />
                </Form.Item>
            }
            {/* <Input name={name} style={{backgroundColor:'transparent',border:'0'}} placeholder="value"/> */}
        </div>
    );
}

export default Feature;