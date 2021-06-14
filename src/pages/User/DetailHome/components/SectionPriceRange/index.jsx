import { useSelector } from 'react-redux';
import './styles.scss';

function SectionPriceRange() {
    const detailHome = useSelector(state => state.detailhome.detailHome)


    //new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(props.listLatestNew?.total_price)
    return (
        <div className="section-price-wrapper">
            <div className="section-price">
                <span style={{left:`${detailHome?.total_price/100000000000*100}%`}} className="current-price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(detailHome?.total_price)}</span>
                <div className="progress">
                    <div class="progress-bar"></div>
                </div>
                <div className="area-price">
                    <div className="price-min">
                        <h5>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(1000000)}</h5>
                        <span>Thấp nhất</span>
                    </div>
                    <h5>Khoảng giá trong khu vực</h5>
                    <div className="price-max">
                        <h5>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(100000000000)}</h5>
                        <span>Cao nhất</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionPriceRange;