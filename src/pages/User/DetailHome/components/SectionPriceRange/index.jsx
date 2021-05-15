import './styles.scss';

function SectionPriceRange() {

    return (
        <div className="section-price-wrapper">
            <div className="section-price">
                <span className="current-price">852,000$</span>
                <div className="progress">
                    <div class="progress-bar"></div>
                </div>
                <div className="area-price">
                    <div className="price-min">
                        <h5>562,000$</h5>
                        <span>Thấp nhất</span>
                    </div>
                    <h5>Khoảng giá trong khu vực</h5>
                    <div className="price-max">
                        <h5>1,280,000$</h5>
                        <span>Cao nhất</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionPriceRange;