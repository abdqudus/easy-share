import { useParams } from "react-router-dom";
import useFilesData from "../customhooks/useFilesData";
import More from "../components/More";

const File = () => {
  const { fileid } = useParams();
  const { urls, data } = useFilesData(fileid);

  // console.log(urls);
  // console.log(data);
  return (
    <div className="px-4 mt-[4rem] text-[#335c67] ">
      <h1 className="text-center mb-6 font-bold text-2xl">Easy Share</h1>
      <div className="overflow-x-auto min-h-[70vh]">
        <table className="min-w-[500px] w-[80%]  mx-auto">
          <thead className="mb-2">
            <tr className="text-left">
              <th className="p-2">Filename</th>
              <th className="p-2">Content type</th>
              <th className="p-2">Size</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, index) => (
              <tr className="text-left border-[#335c67] border-y" key={index}>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.contentType}</td>
                <td className="p-2 ">{item.size}</td>
                <td className="p-2 relative cursor-pointer">
                  <More urls={urls} index={index} name={item.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default File;
