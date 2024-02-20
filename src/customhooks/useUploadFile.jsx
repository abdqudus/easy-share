import { useState } from "react";
import { supabase } from '../../index'
import { v4 as uuidv4 } from "uuid";
const useUploadFile = () => {
  const [url, setUrl] = useState("");

  // const avatarFile = event.target.files[0]
  //
  const upload = async (filesArray) => {
    const id = uuidv4()
    for (const f of filesArray) {
      const { file } = f

      const { error } = await supabase
        .storage
        .from('files')
        .upload(`public/${id}/${file.name}`, file)
      if (error) {
        console.log(error)
      }
    }
    // filesArray.forEach((file, i) => {

    // const storageRef = ref(storage, `${folder}/${file.file.name}`);
    // if (i === filesArray.length - 1) {
    //   uploadBytes(storageRef, file.file).then(() => {
    //     setUrl(folder);
    //   });
    // } else {
    //   uploadBytes(storageRef, file.file);
    // }
    // });
  };
  const handleUpload = (selectedFiles) => {
    const folder = String(Date.now());
    upload(selectedFiles);
  };
  return { url, handleUpload };
};

export default useUploadFile;
