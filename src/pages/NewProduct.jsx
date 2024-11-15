import React, { useState } from "react";
import { UploadImage } from "../api/upload-img";
import { addProduct } from "../api/firebase";
import Button from "../components/common/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function NewProduct() {
  const [imgUrl, setImgUrl] = useState();
  const [product, setProduct] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState("");
  const queryClient = useQueryClient();
  const addNewProduct = useMutation({
    mutationFn: ({ product, url }) => addProduct(product, url),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    if (!imgUrl) return;
    UploadImage(imgUrl)
      .then((res) => {
        if (res.data.url) {
          addNewProduct.mutate(
            { product, imgUrl },
            {
              onSuccess: () => {
                setSuccess("제품을 등록하였습니다.");
                setTimeout(() => {
                  setSuccess(null);
                  setProduct({});
                  setImgUrl();
                }, 5000);
              },
            }
          );
        }
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgUrl(reader.result);
        setProduct({ ...product, img: reader.result });
      };
    }
    setProduct({ ...product, [name]: value });
  };
  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {success && <p className="my-2"> {success}</p>}
      <img className="w-96 mx-auto mb-2" src={imgUrl} alt="" />
      <form onSubmit={handleSubmit} className="flex flex-col px-12">
        <input
          type="file"
          accept="image/*"
          placeholder="제품사진"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value={product.title ?? ""}
          onChange={handleChange}
          name="title"
          placeholder="제품명"
        />
        <input
          type="number"
          value={product.price ?? 0}
          onChange={handleChange}
          name="price"
          placeholder="가격"
        />
        <input
          type="text"
          value={product.category ?? ""}
          onChange={handleChange}
          name="category"
          placeholder="카테고리"
        />
        <input
          type="text"
          value={product.description ?? ""}
          onChange={handleChange}
          name="description"
          placeholder="제품 설명"
        />
        <input
          type="text"
          value={product.options ?? ""}
          onChange={handleChange}
          name="options"
          placeholder="옵션명(콤마로 구분)"
        />
        <Button
          text={isUploading ? "업로드중..." : "제품 등록하기"}
          disabled={isUploading}
        ></Button>
      </form>
    </section>
  );
}
