import { UPLOAD_CONST } from "../domain/constant";
import axios from "axios";
export async function upload(featuredImage, gallery) {
  const newForm = new FormData();
  if (featuredImage) {
    newForm.append(`file`, featuredImage, featuredImage.name);
  }
  if (gallery) {
    Array.from(gallery).forEach((image, index) => {
      newForm.append(`files[${index}]`, image, image.name);
    });
  }
  const image = await axios.post(UPLOAD_CONST, newForm);
  if (image.data) {
    return image.data;
  }
}
