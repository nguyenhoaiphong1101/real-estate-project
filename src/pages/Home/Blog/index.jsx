import React from 'react';
import './styles.scss';
import { Row, Col } from 'antd';



function Blog(props) {
    return (
        <div className="container">
            <div className="blog-title">
                <h5>Latest News</h5>
                <h2>From Our Blog</h2>
            </div>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <article className="blog-post">
                        <div className="blog-post-thumbnail">
                            <a href="#"><img src="http://androthemes.com/themes/react/acres/assets/img/blog/1.jpg" alt="#" /></a>
                        </div>
                        <div className="blog-post-body">
                            <h5 className="blog-post-body-title  pt-20"><a href="#">What agencies are looking for in an agent</a></h5>
                            <p className="blog-post-body-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <div className="blog-post-body-controls">
                                <a className="blog-post-body-controls-btn" href="#">Read More</a>
                            </div>

                        </div>
                    </article>
                </Col>
                <Col span={12}>
                    <article className="blog-post post-list">
                        <div className="blog-post-thumbnail">
                            <a href="#"><img src="http://androthemes.com/themes/react/acres/assets/img/blog/2.jpg" alt="#" /></a>
                        </div>
                        <div className="blog-post-body">
                            <h5 className="blog-post-body-title"><a href="#">What agencies are looking for in an agent</a></h5>
                            <p className="blog-post-body-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </article>
                    <article className="blog-post post-list">
                        <div className="blog-post-thumbnail">
                            <a href="#"><img src="http://androthemes.com/themes/react/acres/assets/img/blog/3.jpg" alt="#" /></a>
                        </div>
                        <div className="blog-post-body">
                            <h5 className="blog-post-body-title"><a href="#">What agencies are looking for in an agent</a></h5>
                            <p className="blog-post-body-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </article>
                </Col>
            </Row>
        </div>
    );
}

export default Blog;