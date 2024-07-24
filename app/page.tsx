import FileUpload from "./components/file-upload";
import Stepper from "./components/stepper";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] bg-gray-100 flex justify-center items-center">

      <div className="bg-white w-[800px] h-[500px] rounded-3xl px-9 py-5">
        <div className="flex flex-col h-full">
          <Stepper />
          <div className="h-full w-full pt-5 flex justify-center items-center">
            <FileUpload />
          </div>
        </div>
      </div>
    </main>
  );
}
