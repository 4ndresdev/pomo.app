import { useState } from "react";
import toast from "react-hot-toast";

const getCloudinaryConfig = () => ({
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  uploadUrl: (cloudName) =>
    `https://api.cloudinary.com/v1_1/${cloudName}/upload/`,
});

const useCloudinary = () => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file) => {
    setLoading(true);

    if (!file) {
      toast.error("No file to upload");
      return null;
    }

    const { cloudName, uploadPreset, uploadUrl } = getCloudinaryConfig();

    if (!cloudName || !uploadPreset) {
      toast.error("Cloudinary configuration is missing");
      setLoading(false);
      return null;
    }

    const URL_CLOUDINARY_UPLOAD = uploadUrl(cloudName);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(URL_CLOUDINARY_UPLOAD, {
        method: "POST",
        body: formData,
      });
      return await response.json();
    } catch (error) {
      toast.error(`Error uploading image: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { uploadImage, loading };
};

export default useCloudinary;
