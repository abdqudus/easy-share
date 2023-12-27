import { Navigate } from "react-router";
import Upload from "../../img/upload-icon.png";
import SelectedFiles from "./SelectedFiles";
import useUploadFile from "../customhooks/useUploadFile";
import { useSelectFile } from "../customhooks/useFileCOntext";

const UploadFile = () => {
  console.log("rendered upload page");
  const { url, handleUpload } = useUploadFile();
  const { dragActive, selectedFiles, handleDrag, handleDrop } = useSelectFile();

  if (url) {
    return <Navigate to={`/${url}`} />;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <form
        onDragEnter={handleDrag}
        className="relative w-[80%] px-4 py-3 flex items-center justify-center flex-col' mx-auto mt-6 max-w-[700px] rounded-xl border-dashed border-[#335c67] border-2"
      >
        <label
          htmlFor="file"
          className="w-full flex items-center justify-center flex-col"
        >
          <div className="w-[30px]">
            <img
              src={Upload}
              alt="upload"
              width={30}
              height={30}
              className="max-w-full"
            />
          </div>
          <p className="flex items-center justify-center text-center ">
            Click to upload or drag and drop
          </p>
        </label>
        <input multiple type="file" name="" id="file" className="sr-only" />
        {dragActive && (
          <div
            className="absolute w-full h-full inset-0 rounded-xl"
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
      {selectedFiles.length > 0 && <SelectedFiles />}
      <button
        onClick={() => handleUpload(selectedFiles)}
        className="mt-3 w-[80%] bg-[#335c67] text-[#fff3b0] mx-auto max-w-[200px] px-3 py-2 rounded-md"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadFile;
