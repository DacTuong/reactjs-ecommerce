import axios from "axios";
import React, { useEffect, useState } from "react";

const AddAttributeValueModal = ({
  show,
  idGroup,
  idAttribute,
  handleClose,
  attributeValues,
  setAttributeValues,
}) => {
  const [nameGroup, setNameGroup] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/group-attributes/${idGroup}/info`)
      .then((res) => setNameGroup(res.data.name_group))
      .catch((err) => console.log(err));
  }, [idGroup]);

  const handleAddRow = () => {
    if (attributeValues.value_attributes.length === 10) {
      alert("Một lần chỉ có thể thêm 10 giá trị!");
      return;
    }
    setAttributeValues((prev) => ({
      ...prev,
      value_attributes: [...prev.value_attributes, ""],
    }));
  };

  const handleDeleteValueAttribute = (index) => {
    if (attributeValues.value_attributes.length === 1) {
      alert("Bắt buộc phải có 1 giá trị thuộc tính");
      return;
    }
    setAttributeValues((prev) => ({
      ...prev,
      value_attributes: prev.value_attributes.filter((_, i) => i !== index),
    }));
  };

  const handleChangeValueAttribute = (index, value) => {
    setAttributeValues((prev) => ({
      ...prev,
      value_attributes: prev.value_attributes.map((v, i) =>
        i === index ? value : v,
      ),
    }));
  };

  // const validAttributeValue = () => {
  //   const isValid = attributeValues.every((item) =>
  //     item.value.every((value) => value.trim() !== ""),
  //   );

  //   if (!isValid) {
  //     alert("vui lòng nhập đầy đủ các tin dòng");
  //     return false;
  //   }
  //   return true;
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validAttributeValue()) {
    //   return;
    // }
    // console.log(attributeValues);
    try {
      await axios.post(
        "http://localhost:8080/api/attribute-values",
        attributeValues,
      );
      alert("Lưu thành công");
      // reset form
      // setBrands([{ name: "", slug: "", brand_image: null, preview: null }]);
    } catch (error) {
      console.error(error);
      alert("Lỗi khi lưu");
    }
    // console.log("1. Bắt đầu gửi request");
    // console.log("2. Dữ liệu chuẩn bị gửi:", attributeValues);

    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/api/attribute-values",
    //     attributeValues,
    //   );

    //   console.log("3. Backend phản hồi:", response.status);
    //   console.log("4. Dữ liệu backend trả về:", response.data);
    // } catch (error) {
    //   console.error("Lỗi gửi API:", error);
    //   console.error("Phản hồi lỗi:", error.response?.data);
    // }
  };
  if (!show) return null;
  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content-custom"
        onClick={(e) => e.stopPropagation()}
      >
        <h4>Nhóm thuộc tính:{nameGroup}</h4>
        <h5>Tên thuộc tính</h5>
        <h5>Thêm mới giá trị</h5>

        <form onSubmit={handleSubmit}>
          <div className="border-form">
            <button type="button" onClick={() => handleAddRow()}>
              Thêm thuộc tính
            </button>

            <table className="attribute-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Giá trị</th>

                  <th>Hành động</th>
                </tr>
              </thead>

              <tbody>
                {attributeValues.value_attributes.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        placeholder="Nhập giá trị..."
                        value={value}
                        onChange={(e) =>
                          handleChangeValueAttribute(index, e.target.value)
                        }
                        required
                      />
                    </td>

                    <td>
                      <button
                        type="button"
                        className="btn-delete"
                        onClick={() => handleDeleteValueAttribute(index)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button type="submit">Lưu dữ liệu</button>
        </form>
      </div>
    </div>
  );
};

export default AddAttributeValueModal;
