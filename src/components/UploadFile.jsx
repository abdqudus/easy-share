import { Navigate } from "react-router";
import { v4 as uuidv4 } from 'uuid'

import SelectedFiles from "./SelectedFiles";
import useUploadFile from "../customhooks/useUploadFile";
import Form from "./Form";
import UploadButton from "./UploadButton";
import { useState } from "react";
import { supabase } from "../..";

const UploadFile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const handleUpload = async (filesArray) => {
    const id = uuidv4();
    setIsLoading(true)
    const uploadPromises = filesArray.map(async (f) => {
      const { file } = f;
      const { error } = await supabase
        .storage
        .from('files')
        .upload(`public/${id}/${file.name}`, file);
      if (error) {
        console.log(error);
      }
    });

    await Promise.all(uploadPromises);

    // setUrl(id);
    localStorage.setItem('link-id', id)
    setIsLoading(false)
    setIsDone(true)
  };

  if (isDone) {
    return <Navigate to='/success' />;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Form />
      <SelectedFiles />
      <UploadButton handleUpload={handleUpload} isLoading={isLoading} />
    </div>
  );
};

export default UploadFile;
