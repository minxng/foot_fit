import axios from "axios";
export function UploadImage(imgUrl) {
  return axios
    .post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL, {
      file: imgUrl,
      upload_preset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
    })
    .then((res) => res);
}
