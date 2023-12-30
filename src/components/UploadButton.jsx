import { useSelectFile } from "../customhooks/useFileCOntext";
import useUploadFile from "../customhooks/useUploadFile";

const UploadButton = () => {
  const { selectedFiles } = useSelectFile();
  const {  handleUpload } = useUploadFile();

  return (
    <button
      onClick={() => handleUpload(selectedFiles)}
      className="mt-3 w-[80%] bg-[#335c67] text-[#fff3b0] mx-auto max-w-[200px] px-3 py-2 rounded-md"
    >
      Upload
    </button>
  );
};

export default UploadButton;
