import './styles.scss';
import SelectCustom from '../../../../../components/Select';
import { Form, Input, InputNumber } from 'antd';
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
                <Form.Item name={name} className="feature-item" rules={[{ required: true, message: `Vui lòng nhập thông tin !` }]}>
                    <SelectCustom onHandleChange={onchange} options={typeApartment} />
                </Form.Item>
                : name === "floor_quantity" || name === "bedroom_quantity" || name === "bathroom_quantity" || name === "toilet_quantity" || name === "area" ?
                    <Form.Item name={name} rules={[{ required: true, message: `Vui lòng nhập thông tin !` }]}>
                        <InputNumber className="input" placeholder={`Thông Tin ${label}`} />
                    </Form.Item>
                    : <Form.Item name={name} rules={[{ required: true, message: `Vui lòng nhập thông tin !` }]}>
                        <Input className="input" placeholder={`Thông Tin ${label}`} />
                    </Form.Item>
            }
            {/* <Input name={name} style={{backgroundColor:'transparent',border:'0'}} placeholder="value"/> */}
        </div>
    );
}

export default Feature;