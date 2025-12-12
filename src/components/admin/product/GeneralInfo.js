import React from "react";

const GeneralInfo = ({
  product,
  setProduct,
  categories,
  handleChangeCategory,
}) => {
  return (
    <div className="information-product">
      <h1>Thông tin sản phẩm</h1>
      <div className="form-groub">
        <label>Mã sản phẩm</label>

        <input
          type="text"
          id="product_code"
          value={product.product_code}
          onChange={(e) =>
            setProduct({ ...product, product_code: e.target.value })
          }
          className=""
        />
      </div>
      <div className="flex-row">
        <div className="form-groub">
          <label>Thương hiệu</label>

          <select
            value={product.brand}
            onChange={(e) =>
              setProduct({
                ...product,
                brand: e.target.value,
              })
            }
          >
            <option>Samsung</option>
            <option>Apple</option>
          </select>
        </div>
        <div className="form-groub">
          <label>Loại sản phẩm</label>

          <select value={product.category} onChange={handleChangeCategory}>
            {categories.map((cate) => (
              <option key={cate.id} value={cate.value}>
                {cate.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-groub">
        <label>Tên sản phẩm</label>
        <input
          type="text"
          id="product_name"
          value={product.product_name}
          onChange={(e) =>
            setProduct({ ...product, product_name: e.target.value })
          }
          className=""
        />
      </div>
      <div className="form-groub">
        <label>Mã SKU</label>
        <input
          type="text"
          id="code_sku"
          value={product.product_sku}
          onChange={(e) =>
            setProduct({ ...product, product_sku: e.target.value })
          }
          className=""
        />
      </div>
    </div>
  );
};

export default GeneralInfo;
