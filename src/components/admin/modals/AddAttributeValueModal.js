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
      .get(`http://localhost:8080/api/group-attributes/${idGroup}/attributes`)
      .then((res) => setNameGroup(res.data.name_group))
      .catch((err) => console.log(err));
  }, [idGroup]);

  const handleAddRow = () => {
    if (attributeValues.length === 10) {
      alert("Một lần chỉ có thể thêm 10 giá trị!");
      return;
    }
    setAttributeValues([
      ...attributeValues,
      {
        value_attribute: "",
      },
    ]);
  };

  const handleDeleteValueAttribute = (index) => {
    if (attributeValues.length === 1) {
      alert("Bắt buộc phải có 1 giá trị thuộc tính");
      return;
    }
    setAttributeValues(attributeValues.filter((_, vAIDx) => vAIDx === index));
  };
  const handleChangeValueAttribute = (index, value) => {
    const newValueAttribute = [...attributeValues];
    newValueAttribute[index].value_attribute = value;
    setAttributeValues(newValueAttribute);
  };
  const handleSubmit = () => {
    console.log(attributeValues);
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
                {attributeValues.map((attributeValue, index) => (
                  <tr>
                    <td>{index + 1}</td>

                    <td>
                      <input
                        placeholder="Nhập tên..."
                        value={attributeValue.value_attribute || ""}
                        onChange={(e) =>
                          handleChangeValueAttribute(index, e.target.value)
                        }
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
