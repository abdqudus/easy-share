import { useEffect, useState } from "react";

const useFilesData = (fileid) => {
  const [urls, setUrls] = useState([]);
  const [data, setData] = useState([]);

  return { data, urls };
};

export default useFilesData;
