import Proptypes from "prop-types";
import File from "../../img/icons8-file-24.png";
import { useSelectFile } from "../customhooks/useFileCOntext";

const SelectedFiles = () => {
  const { selectedFiles, handleRemove } = useSelectFile();
  return (
    <div className="max-w-[700px] flex flex-col gap-2 p-2 w-[80%] max-h-[300px] border-[#335c67] border-[1px] mt-4 overflow-auto">
      {selectedFiles.map((f) => {
        const { file, id } = f;
        return (
          <div
            key={id}
            className="overflow-hidden flex-wrap whitespace-nowrap text-ellipsis border-[1px] border-red-500 max-[360px]:flex-col max-[360px]:flex-nowrap  max-[360px]:items-start max-[360px]:gap-1 flex gap-2 px-2 items-center justify-between "
          >
            <span
              id={id}
              onClick={handleRemove}
              className="hidden max-[360px]:block ml-auto cursor-pointer"
            >
              &#10060;
            </span>
            <p className="flex  gap-1 justify-center max-w-[40%] max-[360px]:max-w-[100%] items-center ">
              <img src={File} alt="" width={15} height={15} />
              <span className="overflow-hidden whitespace-nowrap text-ellipsis  ">
                {file.name}
              </span>
            </p>
            <p className="flex flex-col">
              <span>{file.type}</span>
              <span className="text-[.8rem]">{file.size}</span>
            </p>
            <span id={id} onClick={handleRemove} className="max-[360px]:hidden">
              &#10060;
            </span>
          </div>
        );
      })}
    </div>
  );
};
SelectedFiles.propTypes = {
  selectedFiles: Proptypes.array,
  setSelectedFiles: Proptypes.func,
};
export default SelectedFiles;
