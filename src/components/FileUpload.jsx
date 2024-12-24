import { useCallback } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import useCloudinary from "@/hooks/useCloudinary";

const FileUpload = ({ setSelectedFile }) => {
  const { uploadImage, loading } = useCloudinary();
  const onDrop = useCallback(
    async (acceptedFiles, fileRejections) => {
      if (fileRejections.length) {
        const { message } = fileRejections[0].errors[0];
        toast.error(message, {
          position: "top-center",
        });
        return;
      }

      const imageUploaded = await uploadImage(acceptedFiles[0]).catch(
        (error) => {
          toast.error(error.message);
        }
      );

      if (!imageUploaded) return;

      const { secure_url } = imageUploaded;

      setSelectedFile(secure_url);
    },
    [setSelectedFile, uploadImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });

  if (loading) {
    return (
      <div className="w-full h-24 flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer transition-colors">
        <small className="text-center line leading-relaxed text-md text-slate-500">
          Uploading file... ⌛
        </small>
      </div>
    );
  }

  return (
    <div
      {...getRootProps({
        className: `w-full h-24 flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
          isDragActive ? "border-primary" : "border-slate-200"
        }`,
      })}
    >
      <input {...getInputProps()} />
      <small className="text-center line leading-relaxed text-md text-slate-500">
        {isDragActive
          ? "Drop the file here 📁"
          : "Click or drop your file here 👇"}
      </small>
    </div>
  );
};

FileUpload.propTypes = {
  setSelectedFile: PropTypes.func.isRequired,
};

export default FileUpload;
