import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "../..";
const useUploadFile = () => {
  const [url, setUrl] = useState("");
  const upload = (folder, filesArray) => {
    filesArray.forEach((file, i) => {
      const storageRef = ref(storage, `${folder}/${file.file.name}`);
      if (i === filesArray.length - 1) {
        uploadBytes(storageRef, file.file).then(() => {
          setUrl(folder);
        });
      } else {
        uploadBytes(storageRef, file.file);
      }
    });
  };
  const handleUpload = (selectedFiles) => {
    const folder = String(Date.now());
    upload(folder, selectedFiles);
  };
  return { url, handleUpload };
};

export default useUploadFile;
