import { Navigate } from "react-router";

import SelectedFiles from "./SelectedFiles";
import useUploadFile from "../customhooks/useUploadFile";
import Form from "./Form";
import UploadButton from "./UploadButton";

const UploadFile = () => {
  const { url } = useUploadFile();

  if (url) {
    return <Navigate to={`/${url}`} />;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Form />
      <SelectedFiles />
      <UploadButton />
    </div>
  );
};

export default UploadFile;
