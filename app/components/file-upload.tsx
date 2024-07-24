"use client"
import { ChangeEvent, useState } from "react";
import { UploadIcon } from "@/app/utils/icons";

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>()

  const HandleCancelButton = () => {
    setFiles([])
  }

  const HandleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    const filesList = event.target.files
    if (filesList && filesList.length > 0) {
      let fileArray: File[] = []
      for (let index = 0; index < filesList.length; index++) {
        console.log(filesList[index].name)
        let file = filesList[index]
        fileArray.push(file)
      }
      setFiles(fileArray)
    }
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-full  pb-10">
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center h-full w-full p-4 cursor-pointer"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='23' stroke-linecap='square'/%3e%3c/svg%3e\")",
            borderRadius: '20px'
          }}
        >
          <div className="flex flex-col w-full">
            {files && files.length > 0 ? (files.map((file: File, index: number) => {
              const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2);
              return (
                <div className="flex w-full" key={index}>
                  <p className="font-bold flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-base text-gray-500">
                    {file.name}
                  </p>
                  <p className="text-base text-gray-500">{fileSizeInMB} MB</p>
                </div>)
            })) : <div className="flex flex-col items-center py-5">
              <UploadIcon />
              <p className="text-sm text-gray-500">Haz clic para subir o arrastra el archivo</p>
            </div>}
          </div>
          <input
            id="file-upload"
            type="file"
            className="opacity-0 bg-red-200 absolute h-[150px]"
            onChange={HandleFileInput}
            multiple
          />
        </label>
      </div>
      <div className="flex space-x-4">
        <button
          className="w-full text-[14px] font-[500] py-4  bg-black text-white rounded-xl"
        >
          Subir Archivo
        </button>
        <button
          className="w-full text-[14px] font-[500] py-4 bg-white text-black rounded-xl border border-black hover:bg-gray-100"
          onClick={HandleCancelButton}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}


