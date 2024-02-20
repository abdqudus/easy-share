import { useSelectFile } from "../customhooks/useFileContext";

const UploadButton = ({ handleUpload, isLoading }) => {
  const { selectedFiles } = useSelectFile();
  return (
    <button
      onClick={() => handleUpload(selectedFiles)}
      className="mt-3 w-[80%] bg-[#335c67] text-[#fff3b0] flex items-center gap-2 justify-center mx-auto max-w-[200px] px-3 py-2 rounded-md"
    >
      <span>{isLoading ? 'Uploading...' : 'Upload'}</span>
      {isLoading && <span className="w-[20px] inline-block h-[20px] border-[3px] border-r-blue-600  border-[#fff3b0] rounded-full animate-spin"></span>}
    </button>
  );
};
// 

export default UploadButton;
