import { Link, useParams } from "react-router-dom";

import More from "../components/More";
import { useEffect, useState } from "react";
import { supabase } from "../..";
import { formatBytes } from "../utils";

const File = () => {
  const { fileid } = useParams();

  const [data, setData] = useState([])
  useEffect(() => {

    const getData = async () => {
      try {
        const { data, error } = await supabase.storage.from('files').list('public/' + fileid);
        if (error) {
          console.error(error);
        } else {
          setData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData()
  }, [])

  if (data.length == 0) {

    return (
      <div className="h-screen flex items-center justify-center">
        <span className="w-[20px] inline-block h-[20px] border-[3px] border-r-blue-600  border-[#fff3b0] rounded-full animate-spin">
        </span >
      </div>
    )

  }
  return (
    <div className="px-4 mt-[4rem] text-[#335c67] ">
     
      <Link to='/'> <h1 className="text-center mb-6 font-bold text-2xl">Easy Share</h1></Link>

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
                <td className="p-2">{item.metadata.mimetype}</td>
                <td className="p-2 ">{formatBytes(item.metadata.size)}</td>
                <td className="p-2 relative cursor-pointer">
                  <More data={data} index={index} fileid={fileid} />
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
