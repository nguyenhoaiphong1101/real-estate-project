import './styles.scss';
function Feature({ icon, label, value }) {

    return (
        <div className="feature">
            <i className={icon}></i>
            <h6 className="feature-label">{label}</h6>
            <span className="feature-value">{value}</span>
        </div>
    );
}

export default Feature;