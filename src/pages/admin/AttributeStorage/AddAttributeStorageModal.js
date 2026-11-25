import axios from "axios";
import React, { useState } from "react";

const AddAttributeTypeModal = ({ show, handleClose, onSuccess }) => {
  const [newAttributeType, setNewAttributeType] = useState([
    {
      storage_code: "",
      storage_name: "",
    },
  ]);

  const AddRowAttributeType = () => {
    setNewAttributeType((prev) => [
      ...prev,
      {
        storage_code: "",
        storage_name: "",
      },
    ]);
  };

  const removeRowAttributeType = (attributeTypeIdx) => {
    // cách 1
    setNewAttributeType((prev) => {
      if (prev.length === 1) {
        alert("Phải có ít nhất 1 thuộc tính");
        return prev;
      }

      return prev.filter((_, aTIdx) => aTIdx !== attributeTypeIdx);
    });
    // cách 2
    // if (newAttributeType.length === 1) {
    //   alert("Phải có ít nhất 1 thuộc tính");
    //   return;
    // }
    // setNewAttributeType(
    //   newAttributeType.filter((_, aTIdx) => aTIdx !== attributeTypeIdx),
    // );
  };

  const handleChangeAttributeTypeValue = (attributeTypeIdx, feild, value) => {
    setNewAttributeType((prev) =>
      prev.map((item, i) =>
        i === attributeTypeIdx ? { ...item, [feild]: value } : item,
      ),
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newAttributeType);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/attribute-storage",
        newAttributeType,
      );

      alert(response.data);

      setNewAttributeType([
        {
          storage_code: "",
          storage_name: "",
        },
      ]);

      if (onSuccess) onSuccess();
      handleClose();
    } catch (error) {
      // const message = error.response?.data?.message;
      // alert(message || "Có lỗi xảy ra");

      const data = error.response?.data;
      const message =
        typeof data === "string"
          ? data
          : data?.message || error.message || "Có lỗi xảy ra";
      console.log(message);
    }
  };

  if (!show) return null;
  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content-custom"
        onClick={(e) => e.stopPropagation()}
      >
        <h5>Thêm mới thuộc tính</h5>

        <form onSubmit={handleSubmit}>
          <div className="border-form">
            <div className="attribute-header">
              <button type="button" onClick={() => AddRowAttributeType()}>
                + Thêm thuộc tính
              </button>
            </div>

            <table className="attribute-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã thuộc tính</th>
                  <th>Tên thuộc tính</th>
                  <th>Hành động</th>
                </tr>
              </thead>

              <tbody>
                {newAttributeType.map((attributeType, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        placeholder="Nhập mã thuộc tính ví dụ NORMAL"
                        value={attributeType.storage_code}
                        onChange={(e) =>
                          handleChangeAttributeTypeValue(
                            index,
                            "storage_code",
                            e.target.value,
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        placeholder="Nhập tên thuộc tính ví dụ Bảng thường"
                        value={attributeType.storage_name}
                        onChange={(e) =>
                          handleChangeAttributeTypeValue(
                            index,
                            "storage_name",
                            e.target.value,
                          )
                        }
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeRowAttributeType(index)}
                      >
                        X
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

export default AddAttributeTypeModal;
