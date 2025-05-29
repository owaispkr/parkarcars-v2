import { FC, useRef, useState } from "react";
import Dragger from "antd/es/upload/Dragger";
import { UploadFile, UploadProps } from "antd";
import { supabase } from "../../../../providers/supabase/supabaseClient";
import { Cars } from "../../../../types/api/forms/Cars";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = { newCar: Cars };

const UploadGallery: FC<Props> = ({ newCar }) => {
  const navigate = useNavigate();

  const [, setFileList] = useState<UploadFile[]>([]);
  const uploadedUrlsRef = useRef(""); // ✅ persists across uploads

  const customRequest: UploadProps["customRequest"] = async (options) => {
    const { file, onSuccess, onError } = options;

    const filePath = `${newCar.maker}-${newCar.id}/${uuidv4()}`;

    const { error } = await supabase.storage
      .from("car-gallery") // replace with your bucket name
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      onError?.(error);
    } else {
      const { data } = supabase.storage
        .from("car-gallery")
        .getPublicUrl(filePath);

      uploadedUrlsRef.current +=
        (uploadedUrlsRef.current ? "," : "") + data.publicUrl;
      onSuccess?.({ status: "ok" }, file);
    }
  };

  const onChange = async ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    setFileList(newFileList);

    const allDone = newFileList.every(
      (file) => file.status === "done" || file.status === "error"
    );

    if (allDone) {
      setTimeout(async () => {
        console.info("✅ All uploads complete!");
        const { error } = await supabase
          .from("Cars")
          .update({ gallery: uploadedUrlsRef.current }) // assumes gallery is text[]
          .eq("id", newCar.id ?? 0);

        if (error) {
          toast.error("Failed to update car gallery");
        } else {
          console.info("Car gallery updated!");
          toast.success("It is done!!");
          navigate("/dashboard");
        }
      }, 500);
    }
  };

  return (
    <>
      <div className="my-10 ">
        <div className="w-full text-start">
          <Dragger
            multiple
            customRequest={customRequest}
            className="mb-3"
            listType="picture"
            onChange={onChange}
            accept=".png, .jpg, .jpeg"
            action={""}
          >
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </div>
      </div>
    </>
  );
};

export default UploadGallery;
