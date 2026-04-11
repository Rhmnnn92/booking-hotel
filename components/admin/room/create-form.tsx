"use client";
import { type PutBlobResult } from "@vercel/blob";
import { useRef, useState, useTransition } from "react";
import Image from "next/image";
import { BarLoader } from "react-spinners";
import { Amenities } from "@/app/generated/prisma/";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import { METHODS } from "http";
const CreateForm = ({amenities}:{amenities: Amenities[]}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransiton] = useTransition();

  const handleUpload = () => {
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.set("file", file);
    startTransiton(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();
        if (response.status != 200) {
          setMessage(data.message);
        }
        const img = data as PutBlobResult;
        setImage(img.url);
      } catch (error) {
        console.log("error", error);
      }
    });
  };
  const deleteImage = (image: string) => {
    startTransiton(async () => {
      try {
        await fetch(`/api/upload/?imageUrl=${image}`, { method: "DELETE" });
        setImage("");
      } catch (error) {
        console.log("error", error);
      }
    });
  };

  return (
    <form action="">
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-4">
          <div className="mb-4">
            <input
              placeholder="Room Name"
              type="text"
              name="name"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red mt-2">Message</span>
            </div>
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              rows={8}
              placeholder="Description"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red mt-2">Message</span>
            </div>
          </div>
          <div className="mb-4 grid md:grid-cols-3">
            <input
              placeholder="Room Name"
              type="checkbox"
              name="amenities"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
            />
            
            <label className="sm-2 text-sm text-gray-900 font-medium capitalize">
              Spa
            </label>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red mt-2">Message</span>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white p-4">
          <label
            htmlFor="input-file"
            className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative overflow-hidden"
          >
            {pending ? <BarLoader /> : null}
              {/* Preview muncul jika image ada */}
            {image && (
              <Image
                src={image}
                alt="preview"
                fill // Menggunakan fill lebih aman untuk posisi absolute
                className="object-contain"
              />
            )}
            {image ? (
              <button
                type="button"
                onClick={() => deleteImage(image)}
                className="flex items-center justify-center bg-transparent size-6 rounded-sm absolute right-1 top-1 text-white hover:bg-red-400"
              >
                <IoTrashOutline className="size-4 hover:text-white" />
              </button>
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10 bg-white/50 p-2 rounded-lg">
                <IoCloudUploadOutline className="size-8" />
                <p className="mb-1 text-sm font-bold">Select image</p>

                {message ? (
                  <p className="text-xs text-red-500">{message}</p>
                ) : (
                  <p className="text-xs">SVG, PNG, JPEG, GIF (max: 4MB)</p>
                )}
              </div>
            )}

            {/* Input selalu ada */}
            <input
              type="file"
              ref={inputFileRef}
              onChange={handleUpload}
              id="input-file"
              className="hidden"
              accept="image/*"
            />

          
          </label>
          <div className="mb-4">
            <input
              placeholder="Price"
              type="price"
              name="capasity"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red mt-2">Message</span>
            </div>
          </div>

          <div className="mb-4">
            <input
              placeholder="capasity"
              type="capasity"
              name="capasity"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red mt-2">Message</span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-400 text-white w-full hover:bg-orange-500 py-2.5 px-6 md:px-10 text-large font-semibold cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
