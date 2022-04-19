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
} from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadListCategory } from "../../../actions/category";
import { loadDetailHome } from "../../../actions/detailhome";
import { loadDistrict, loadProvince } from "../../../actions/search";
import { createPost, updatePost } from "../../../api/createPostApartment";
import Button from "../../../components/Button";
import HTMLEditor from "../../../components/HTMLEditor";
import SelectCustom from "../../../components/Select";
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
  const [valueDistrict, setValueDistrict] = useState({ id: null, name: "" });
  const [valueProvince, setValueProvince] = useState({ id: null, name: "" });
  const [valueTypeApartment, setValueTypeApartment] = useState({
    id: null,
    name: "",
  });
  const [valueCategory, setValueCategory] = useState({ id: null, name: "" });
  const [descriptionEditor, setDescriptionEditor] = useState("");
  const [photos, setPhotos] = useState([]);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (valueProvince.id) getDistrict(valueProvince.id);
  }, [valueProvince]);

  const getDistrict = (id) => {
    dispatch(loadDistrict(id));
  };
  const handleChangeOverview = (e) => {
    setDescriptionEditor(e);
  };
  const changeValueProvince = (value, id) => {
    setValueProvince({ id: id.key, name: value });
    form.setFieldsValue({
      province: {
        id: id.key,
        name: value,
      },
    });
    form.setFieldsValue({
      district: {
        id: null,
        name: "",
      },
    });
  };

  const changeValueDistrict = (value, id) => {
    setValueDistrict({ id: id.key, name: value });
    form.setFieldsValue({
      district: {
        id: id.key,
        name: value,
      },
    });
  };
  const changeValueTypeApartment = (value, id) => {
    setValueTypeApartment({ id: id.key, name: value });
    form.setFieldsValue({
      type_apartment: {
        id: id.key,
        name: value,
      },
    });
  };
  const changeValueCategory = (value, id) => {
    setValueCategory({ id: id.key, name: value });
    form.setFieldsValue({
      category: {
        id: id.key,
        name: value,
      },
    });
  };

  useEffect(() => {
    if (form.getFieldValue().district?.id === null)
      form.setFieldsValue({
        district: null,
      });
  }, [form.getFieldValue().district]);
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

  async function submitData() {
    // await callApiImage().forEach((item) => {
    //     listphoto.push(item);
    // });

    let listphoto = await callApiImage();

    const dataForm = form.getFieldValue();

    if (listphoto.length === 0) {
      message.error("Vui lòng chọn hình ảnh !");
    } else {
      const dataPost = {
        apartment_address: {
          address: dataForm.address,
          country_code: "VN",
          district_id: valueDistrict.id,
          province_id: valueProvince.id,
        },
        apartment_detail: {
          balcony_direction: dataForm.balcony_direction,
          bathroom_quantity: dataForm.bathroom_quantity,
          bedroom_quantity: dataForm.bedroom_quantity,
          description: descriptionEditor,
          entrance_building: dataForm.entrance_building,
          floor_quantity: dataForm.floor_quantity,
          front_building: dataForm.front_building,
          furniture: dataForm.furniture,
          house_direction: dataForm.house_direction,
          toilet_quantity: dataForm.toilet_quantity,
        },
        area: dataForm.area,
        category_id: valueCategory.id,
        expired_date:
          moment(dataForm.expired_date).format("YYYY-MM-DDTHH:mm:ss") + "Z",
        overview: dataForm.overview,
        title: dataForm.title,
        total_price: dataForm.total_price,
        type_apartment: valueTypeApartment.id,
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
    // }
  }

  const user = useSelector((state) => state.user.user);

  const history = useHistory();

  useEffect(() => {
    if (
      history.location.pathname === `/chinh-sua/${history?.location?.state?.id}`
    )
      dispatch(loadDetailHome(history?.location?.state?.id, user?.id));
  }, []);

  useEffect(() => {
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
      district: !!detailHome?.addressDetail?.district_id
        ? {
            id: detailHome?.addressDetail?.district_id,
            name: detailHome?.addressDetail?.district_name,
          }
        : null,
      province: !!detailHome?.addressDetail?.province_id
        ? {
            id: detailHome?.addressDetail?.province_id,
            name: detailHome?.addressDetail?.province_name,
          }
        : null,
      category: !!detailHome?.category_id
        ? {
            id: detailHome?.category_id,
            name: detailHome?.category_name,
          }
        : null,
      type_apartment: !!detailHome?.type_apartment
        ? {
            id: detailHome?.type_apartment === "Bán" ? "BUY" : "RENT",
            name: detailHome?.type_apartment,
          }
        : null,
    });
    setValueCategory({
      id: detailHome?.category_id,
      name: detailHome?.category_name,
    });
    setValueDistrict({
      id: detailHome?.addressDetail?.district_id,
      name: detailHome?.addressDetail?.district_name,
    });
    setValueProvince({
      id: detailHome?.addressDetail?.province_id,
      name: detailHome?.addressDetail?.province_name,
    });
    setValueTypeApartment({
      id: detailHome?.type_apartment === "Bán" ? "BUY" : "RENT",
      name: detailHome?.type_apartment,
    });
    setDescriptionEditor(detailHome?.apartment_detail?.description);
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
                name="category"
                className="form-control"
                rules={[
                  { required: true, message: "Vui lòng chọn thể loại !" },
                ]}
              >
                <SelectCustom
                  title="Thể loại"
                  onHandleChange={changeValueCategory}
                  options={listCategory}
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
              <Row>
                <Col span={12} className="pr-20">
                  <Form.Item
                    name="province"
                    rules={[
                      { required: true, message: "Vui lòng chọn thành phố !" },
                    ]}
                  >
                    <SelectCustom
                      title="Thành phố"
                      onHandleChange={changeValueProvince}
                      options={listProvince}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="district"
                    rules={[
                      { required: true, message: "Vui lòng chọn quận/huyện !" },
                    ]}
                  >
                    <SelectCustom
                      title="Quận/huyện"
                      value={valueDistrict}
                      onHandleChange={changeValueDistrict}
                      options={listDistrict}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="address"
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ !" }]}
              >
                <Input className="input" placeholder="Địa chỉ cụ thể"></Input>
              </Form.Item>
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
                // m phải tìm thuộc tính để truyền cái image vào trong này, image truyền vào không phải image mà người ta chọn
                // khi cái file m đã thay đổi thì file truyền vào đây cũng sẽ thay đổi, nên việc hiển thị ảnh ở
                // đây là do server của mình, mà k phải do server của ant, nên mới quản lý được
                // Chứ giờ m tìm hiểu cái này, thì tí tìm hiểu xong dùng api call thì cũng xóa đi thôi à
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
                  onChange={handleChangeOverview}
                  value={
                    descriptionEditor === undefined ||
                    descriptionEditor === null ||
                    descriptionEditor === "<p></p>\n"
                      ? ""
                      : descriptionEditor
                  }
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
                                onchange={changeValueTypeApartment}
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
        <Button
          className="btn-custom"
          value={
            history.location.pathname === "/dang-bai" ? "Đăng bài" : "Chỉnh sửa"
          }
          onClick={() => submitData()}
        ></Button>
      </Form>
    </div>
  );
}

export default SubmitList;
