import React from "react";

const VariantProduct = ({
  variants,
  updateVariant,
  removeVariant,
  addVariant,
  addColor,
  removeColor,
  updateColor,
}) => {
  return (
    <div className="variant-product">
      <h3>Thêm biến thể sản phẩm</h3>
      <button onClick={addVariant} type="button">
        Thêm biến thể
      </button>
      {variants.map((variant, vIndex) => (
        <div key={vIndex} className="variant-box">
          <div className="flex-row">
            <b>Biến thể số {vIndex + 1}</b>
            <button type="button" onClick={() => removeVariant(vIndex)}>
              Xóa biến thể
            </button>
          </div>
          <div className="form-groub">
            <label>Tên biến thể</label>
            <input
              value={variant.name_variant}
              onChange={(e) => updateVariant(vIndex, e.target.value)}
            />
          </div>

          <button type="button" onClick={() => addColor(vIndex)}>
            Thêm màu mới
          </button>
          {/* HIỂN THỊ DANH SÁCH MÀU */}
          {variant.colors.map((color, cIndex) => (
            <div className="" key={cIndex}>
              <div className="flex-row">
                <h3>Màu sắc số {cIndex + 1}</h3>
                <button
                  type="button"
                  onClick={() => removeColor(vIndex, cIndex)}
                >
                  Xóa
                </button>
              </div>
              <div className="flex-row">
                <div className="form-groub">
                  <label>Tên màu sắc</label>
                  <input
                    value={color.color_name}
                    onChange={(e) =>
                      updateColor(vIndex, cIndex, "color_name", e.target.value)
                    }
                  ></input>
                </div>
                <div className="form-groub">
                  <label>Mã SKU</label>
                  <input
                    value={color.color_sku}
                    onChange={(e) =>
                      updateColor(vIndex, cIndex, "color_sku", e.target.value)
                    }
                  ></input>
                </div>
              </div>
              <div>
                <input type="file" multiple accept="image/*" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VariantProduct;
