import React from 'react';
import './styles.scss';
function ThumbnailSecondary() {

    return (
        <div class="listing listing-secondary">
            <div class="listing-thumbnail">
                <a>
                    <img src="http://androthemes.com/themes/react/acres/assets/img/listings/1.jpg" alt="listing" />
                </a>
            </div>
            <div class="listing-body">
                <h6 class="listing-title">
                    <a title="Iris Watson, Frederick Nebraska 20620">
                        Iris Watson, Frederick Nebraska 20620 </a>
                </h6>
                <span class="listing-price">3,500$
                    <span>/month</span>
                </span>
            </div>
        </div>
    );
}

export default ThumbnailSecondary;