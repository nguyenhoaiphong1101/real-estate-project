import React from 'react';
import { Upload } from 'antd';
import "./styles.scss"



function Gallery() {
    return (
        <div className="gallery">
            <div className="form-group">
                <label>Property Thumbnail</label>
                <div className="custom-file">
                    <input type="file" />
                    <label>Choose file</label>
                </div>
            </div>
            <div className="form-group">
                <label>Property Gallery</label>
                <Upload className="dropzone">
                    <input type="file" accept="image/*" multiple autoComplete="off" className="displaynone" tabindex="-1" />
                    <div className="dropzone-msg dz-message needsclick">
                        <i className="fas fa-cloud-upload-alt"></i>
                        <h5>Drop files here or click to upload.</h5>
                        <span className="dropzone-msg-desc">This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded. </span>
                    </div>
                </Upload>
                <span className="acr-form-notice">*You can upload up to 5 images for your listing</span>
                <span className="acr-form-notice">*Listing images should be atleast 620x480 in dimensions</span>
            </div>
        </div>
    );
}

export default Gallery;