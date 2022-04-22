import { PlusOutlined } from "@ant-design/icons";
import {
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Row,
  Upload,
  InputNumber,
  Select,
} from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadListCategory } from "../../../actions/category";
import { loadDetailHome } from "../../../actions/detailhome";
import { loadDistrict, loadProvince } from "../../../actions/search";
import { createPost, updatePost } from "../../../api/createPostApartment";
import Button from "../../../components/Button";
import HTMLEditor from "../../../components/HTMLEditor";
import SubHeader from "../../../components/SubHeader";
import { API_URL } from "../../../constants/Config";
import Feature from "./components/Feature";
import "./styles.scss";

function SubmitList(props) {
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ paddingTop: "10px" }}>Upload</div>
    </div>
  );

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const listDistrict = useSelector((state) => state.search.district);
  const listProvince = useSelector((state) => state.search.province);
  const listCategory = useSelector((state) => state.category.listCategory);
  const detailHome = useSelector((state) => state.detailhome.detailHome);
  const { id } = useParams();
  const token = localStorage.getItem("access_token");

  const getDistrict = (id) => {
    dispatch(loadDistrict(id));
  };

  const changeValueProvince = (value) => {
    getDistrict(value);
    form.resetFields(["district"]);
  };

  const getPhotosImg = (name) => `${API_URL}/public/image/apartment/${name}`;

  useEffect(() => {
    dispatch(loadProvince());
    dispatch(loadListCategory());
  }, []);

  const [arr1, setArr1] = useState([
    {
      icon: "flaticon-paint",
      label: "Mặt tiền",
      name: "front_building",
    },
    {
      icon: "flaticon-garage",
      label: "Lối vào nhà",
      name: "entrance_building",
    },
    {
      icon: "flaticon-chair",
      label: "Nội thất",
      name: "furniture",
    },
    {
      icon: "flaticon-fan",
      label: "Hướng nhà",
      name: "house_direction",
    },
    {
      icon: "flaticon-garage",
      label: "Hướng ban công",
      name: "balcony_direction",
    },
    {
      icon: "flaticon-ruler",
      label: "Số tầng",
      name: "floor_quantity",
    },
  ]);
  const [arr2, setArr2] = useState([
    {
      icon: "flaticon-pillow",
      label: "Phòng ngủ",
      name: "bedroom_quantity",
    },
    {
      icon: "flaticon-bathtub",
      label: "Phòng tắm",
      name: "bathroom_quantity",
    },
    {
      icon: "flaticon-bathtub",
      label: "Nhà vệ sinh",
      name: "toilet_quantity",
    },
    {
      icon: "flaticon-ruler",
      label: "Kích thước",
      name: "area",
    },
    {
      icon: "flaticon-new",
      label: "Tình trạng",
      name: "type_apartment",
    },

    {
      icon: "flaticon-view",
      label: "View",
      name: "overview",
    },
  ]);

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
  }

  async function callApiImage() {
    const bodyFormData = new FormData();
    let imgFiles = [];
    let result = [];
    fileList.forEach((file) => {
      if (!file.file) {
        result.push({
          originalName: file.originalName,
          name: file.name,
          extension: file.extension,
        });
      }
    });
    fileList.forEach((file) => {
      if (file.file) {
        imgFiles.push(file.file);
      }
    });

    if (imgFiles.length !== 0 && isChange === true) {
      setIsChange(false);
      for (let i = 0; i < imgFiles.length; i++) {
        bodyFormData.append("files", imgFiles[i]);
      }
      await axios
        .request({
          url: API_URL + "/upload/photo",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: bodyFormData,
        })
        .then((res) => {
          // bodyFormData.delete("files");
          res.data.data.forEach((file) => {
            result.push({
              originalName: file.originalName,
              name: file.name,
              extension: file.extension,
            });
            // result.push({
            //     originalName: file.originalName,
            //     name: file.name,
            //     extension: file.extension,
            // });
          });
        });
    }

    return result;
  }

  async function submitData(values) {
    console.log(values);
    // await callApiImage().forEach((item) => {
    //   listphoto.push(item);
    // });

    let listphoto = await callApiImage();

    if (listphoto.length === 0) {
      message.error("Vui lòng chọn hình ảnh !");
    } else {
      const dataPost = {
        apartment_address: {
          address: values.address,
          country_code: "VN",
          district_id: values.district,
          province_id: values.province,
        },
        apartment_detail: {
          balcony_direction: values.balcony_direction,
          bathroom_quantity: values.bathroom_quantity,
          bedroom_quantity: values.bedroom_quantity,
          description: values.description,
          entrance_building: values.entrance_building,
          floor_quantity: values.floor_quantity,
          front_building: values.front_building,
          furniture: values.furniture,
          house_direction: values.house_direction,
          toilet_quantity: values.toilet_quantity,
        },
        area: values.area,
        category_id: values.category,
        expired_date:
          moment(values.expired_date).format("YYYY-MM-DDTHH:mm:ss") + "Z",
        overview: values.overview,
        title: values.title,
        total_price: values.total_price,
        type_apartment: values.type_apartment,
        photos: listphoto,
      };

      if (history.location.pathname === "/dang-bai") {
        createPost.POST(dataPost);
        form.resetFields();
        setFileList([]);
      } else {
        updatePost.PUT(dataPost, detailHome.id);
      }
    }
  }

  const user = useSelector((state) => state.user.user);

  const history = useHistory();

  useEffect(() => {
    if (id) dispatch(loadDetailHome(id));
  }, []);

  useEffect(() => {
    console.log(detailHome);
    form.setFieldsValue({
      address: detailHome?.addressDetail?.address,
      balcony_direction: detailHome?.apartment_detail?.balcony_direction,
      bathroom_quantity: detailHome?.apartment_detail?.bathroom_quantity,
      bedroom_quantity: detailHome?.apartment_detail?.bedroom_quantity,
      description: detailHome?.apartment_detail?.description,
      entrance_building: detailHome?.apartment_detail?.entrance_building,
      floor_quantity: detailHome?.apartment_detail?.floor_quantity,
      front_building: detailHome?.apartment_detail?.front_building,
      furniture: detailHome?.apartment_detail?.furniture,
      house_direction: detailHome?.apartment_detail?.house_building,
      toilet_quantity: detailHome?.apartment_detail?.toilet_quantity,
      area: detailHome?.area,
      expired_date: moment(detailHome?.expired_date),
      overview: detailHome?.overview,
      title: detailHome?.title,
      total_price: detailHome?.total_price,
      district: detailHome?.addressDetail?.district_id,
      province: detailHome?.addressDetail?.province_id,
      category: detailHome?.category_id,
      type_apartment: detailHome?.type_apartment,
    });
    // setDescriptionEditor(detailHome?.apartment_detail?.description);
    getDistrict(detailHome?.addressDetail?.province_id);
    let imgs = [];
    detailHome.photos?.forEach((item, index) => {
      imgs.push({ ...item, uid: index, url: getPhotosImg(item.name) });
    }); // dòng này là nó set img đây nè, ban đầu nếu chưa có img thì cái này nó sẽ rỗng, m sẽ hiển thị image mặc định
    setFileList(imgs);
  }, [detailHome]);

  const valueFormChange = () => {};

  const handleChange = (info) => {
    const newList = [...info.fileList];
    newList.forEach((item) => {
      item.status = "done";
      let mapItem = fileList.find((file) => file.uid === item.uid);
      if (mapItem) {
        item.url = mapItem.url;
        item.file = mapItem.file;
      }
    });
    if (info.file.originFileObj) {
      getBase64(info.file.originFileObj, (imageUrl) => {
        newList.forEach((item) => {
          if (item.uid === info.file.uid) {
            item.url = imageUrl;
          }
        });
        setFileList(newList);
      });
      setIsChange(true);
    }
    setFileList(newList);
  };

  const beforeUpload = (file) => {
    setFileList([
      ...fileList,
      {
        file: file,
        uid: file.uid,
        name: file.name,
      },
    ]);
  };
  return (
    <div className="sublist">
      <SubHeader
        title={
          history.location.pathname === "/dang-bai"
            ? "Đăng bài"
            : "Chỉnh Sửa Bài Đăng"
        }
      />
      <Form
        onValuesChange={valueFormChange}
        form={form}
        onFinish={submitData}
        className="container form-submit-listing"
      >
        <Row className="row">
          <Col span={12}>
            <div className="wrapper-space">
              <h1 style={{ fontSize: "1.5rem", fontWeight: "800" }}>Tiêu đề</h1>
              <Form.Item
                name="title"
                className="form-control"
                rules={[{ required: true, message: "Vui lòng nhập tiêu đề !" }]}
              >
                <Input
                  className="input"
                  type="text"
                  placeholder="Tiêu đề"
                ></Input>
              </Form.Item>
              <Form.Item
                label="Thể loại"
                name="category"
                className="form-control  pl-auto label"
                rules={[
                  { required: true, message: "Vui lòng chọn thể loại !" },
                ]}
              >
                <Select
                  options={listCategory.map((item) => {
                    return {
                      value: item.id,
                      label: item.name,
                    };
                  })}
                />
              </Form.Item>
              <Form.Item
                className="pl-auto label"
                label="Ngày Hết Hạn"
                name="expired_date"
                rules={[{ required: true, message: "Vui lòng nhập ngày !" }]}
              >
                <DatePicker className="input" disabledDate={disabledDate} />
              </Form.Item>
              <Form.Item
                className="pl-auto label"
                name="total_price"
                label="Tổng Giá"
                rules={[{ required: true, message: "Vui lòng nhập giá !" }]}
              >
                <InputNumber className="input" />
              </Form.Item>
            </div>
          </Col>
          <Col span={12}>
            <div className="wrapper-space">
              <h1
                style={{ fontSize: "1.5rem", fontWeight: "800" }}
                className="title"
              >
                Địa chỉ
              </h1>
              <Form.Item
                name="address"
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ !" }]}
              >
                <Input className="input" placeholder="Địa chỉ cụ thể"></Input>
              </Form.Item>
              <Row>
                <Col span={24}>
                  <Form.Item
                    label="Thành phố"
                    name="province"
                    className="form-control  pl-auto label"
                    rules={[
                      { required: true, message: "Vui lòng chọn thành phố !" },
                    ]}
                  >
                    <Select
                      title="Thành phố"
                      onChange={changeValueProvince}
                      options={listProvince.map((item) => {
                        return {
                          value: item.id,
                          label: item.name,
                        };
                      })}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Quận huyện"
                    name="district"
                    className="form-control  pl-auto label"
                    rules={[
                      { required: true, message: "Vui lòng chọn quận/huyện !" },
                    ]}
                  >
                    <Select
                      title="Quận/huyện"
                      options={listDistrict.map((item) => {
                        return {
                          value: item.id,
                          label: item.name,
                        };
                      })}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col span={24}>
            <div className="wrapper-space">
              <h1 style={{ fontSize: "1.5rem", fontWeight: "800" }}>
                Hình ảnh
              </h1>
              <Upload
                listType="picture-card"
                fileList={fileList}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {uploadButton}
              </Upload>
            </div>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </Col>
        </Row>
        <Row className="row">
          <Col span={24}>
            <div className="wrapper-space">
              <h1 style={{ fontSize: "1.5rem", fontWeight: "800" }}>
                Tổng quan
              </h1>
              <Form.Item
                name="description"
                rules={[{ required: true, message: "Vui lòng nhập mô tả !" }]}
              >
                <HTMLEditor
                  wrapperClassName="wrapper-editor"
                  editorClassName="editor"
                  toolbarClassName="toolbar"
                />
              </Form.Item>
            </div>
          </Col>
        </Row>

        <Row className="row">
          <Col span={24}>
            <div className="wrapper-space">
              <div className="section-feature">
                <h4 style={{ fontSize: "1.5rem" }} className="title">
                  Đặc điểm
                </h4>
                <div className="container-fluid wrapper">
                  <div className="list-feature">
                    <Row>
                      <Col span={12}>
                        {arr1.map((item, index) => {
                          return (
                            <Feature
                              key={index}
                              name={item.name}
                              icon={item.icon}
                              label={item.label}
                            />
                          );
                        })}
                      </Col>
                      <Col span={12}>
                        {arr2.map((item, index) => {
                          if (item.name === "type_apartment") {
                            return (
                              <Feature
                                key={index}
                                name={item.name}
                                icon={item.icon}
                                label={item.label}
                              />
                            );
                          } else {
                            return (
                              <Feature
                                key={index}
                                name={item.name}
                                icon={item.icon}
                                label={item.label}
                              />
                            );
                          }
                        })}
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Form.Item>
          <Button
            className="btn-custom"
            value={
              history.location.pathname === "/dang-bai"
                ? "Đăng bài"
                : "Chỉnh sửa"
            }
            htmlType="submit"
          ></Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SubmitList;
