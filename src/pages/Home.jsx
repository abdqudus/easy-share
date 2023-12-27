import UploadFile from "../components/UploadFile";
import SelectFileContext from "../contexts/selectFileContext";

function Home() {
  console.log("rendered home");
  return (
    <div className="w-full p-4 min-h-screen bg-[#fff3b0] text-[#335c67]">
      <h1 className="text-3xl text-center font-bold">Easy Share</h1>
      <p className="text-center font-bold">An easy way to share files.</p>
      <SelectFileContext>
        <UploadFile />
      </SelectFileContext>
    </div>
  );
}

export default Home;
