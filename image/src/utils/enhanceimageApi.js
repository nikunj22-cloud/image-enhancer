import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY; // Use environment variable

// const BASE_URL = "https://techhk.aoscdn.com";
const MAXIMUM_RETRIES = 20;

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image Uploaded Successfully, Task ID:", taskId);

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);

    return enhancedImageData;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized: Please check your API key.");
    } else {
      console.error("Error enhancing image:", error.message);
    }
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/tasks/visual/scale`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-API-KEY": API_KEY,
        },
      }
    );

    if (!data?.data?.task_id) {
      throw new Error("Failed to upload image! Task ID not found.");
    }
    return data.data.task_id;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Unauthorized: Invalid API key.");
    }
    throw error;
  }
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Max retries reached. Please try again later.");
    }

    // wait for 2 second
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return PollForEnhancedImage(taskId, retries + 1);
  }

  console.log("Enhanced Image URL:", result);
  return result;
};

const fetchEnhancedImage = async (taskId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );
    if (!data?.data) {
      throw new Error("Failed to fetch enhanced image! Image not found.");
    }

    return data.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Unauthorized: Invalid API key.");
    }
    throw error;
  }
};
