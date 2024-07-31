import { useEffect, useState } from "react";
import { images } from "../Assets";
import moment from "moment";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

//set email
export const setEmail = (email) =>
  localStorage.setItem("email", JSON.stringify(email));
export const getEmail = () => JSON.parse(localStorage.getItem("email"));

//set email
export const setCode = (code) =>
  localStorage.setItem("code", JSON.stringify(code));
export const getCode = () => JSON.parse(localStorage.getItem("code"));

export const usePasswordToggle = () => {
  const [eyeIcon, seteyeIcon] = useState(faEyeSlash);
  const [passwordType, setPasswordType] = useState(0);

  const toggleIcon = () => {
    if (eyeIcon === faEyeSlash) {
      seteyeIcon(faEye);
      setPasswordType(1);
    } else {
      seteyeIcon(faEyeSlash);
      setPasswordType(0);
    }
  };

  return [eyeIcon, toggleIcon, passwordType];
};

export const usePasswordToggle2 = () => {
  const [eyeIcon2, seteyeIcon2] = useState(faEyeSlash);
  const [passwordType2, setPasswordType2] = useState(0);
  const toggleIcon2 = () => {
    if (eyeIcon2 == faEyeSlash) {
      seteyeIcon2(faEye);
      setPasswordType2(1);
    } else {
      seteyeIcon2(faEyeSlash);
      setPasswordType2(0);
    }
  };

  return [eyeIcon2, toggleIcon2, passwordType2];
};

export const usePasswordToggle3 = () => {
  const [eyeIcon3, seteyeIcon3] = useState(faEyeSlash);
  const [passwordType3, setPasswordType3] = useState(0);
  const toggleIcon3 = () => {
    if (eyeIcon3 == faEyeSlash) {
      seteyeIcon3(faEye);
      setPasswordType3(1);
    } else {
      seteyeIcon3(faEyeSlash);
      setPasswordType3(0);
    }
  };

  return [eyeIcon3, toggleIcon3, passwordType3];
};

//form builder
export const buildFormData = (formData, data, parentKey) => {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(formData, data[key], key);
    });
  } else {
    const value = data == null ? "" : data;
    formData.append(parentKey, value);
  }
};

//icon function

export const getIcon = (data) => {
  if (data === "user") {
    return images.statsAd1;
  }
  if (data === "restaurant") {
    return images.statsAd2;
  }
  if (data === "branch") {
    return images.statsRE1;
  }
  if (data === "orders") {
    return images.statsRE5;
  }
  if (data === "product") {
    return images.statsRE2;
  }
  if (data === "promo_code") {
    return images.statsRE3;
  }
};

export const getText = (data) => {
  if (data === "user") {
    return "Total Users";
  }
  if (data === "restaurant") {
    return "Total Restaurants";
  }
  if (data === "branch") {
    return "Total Branches";
  }
  if (data === "orders") {
    return "Total Orders";
  }
  if (data === "product") {
    return "Total Products";
  }
  if (data === "promo_code") {
    return "Total Promo Codes";
  }
};

export const dateFormat = (data) => {
  if (data) {
    return moment(data).format("DD/MM/YYYY");
  } else {
    return "-";
  }
};

export const dateTimeFormat = (data) => {
  if (data) {
    const now = moment();
    const inputDate = moment(data);

    if (inputDate.isSame(now, "day")) {
      // If the given date is today, display only time
      return inputDate.format("hh:mm A");
    } else if (inputDate.isSame(now.clone().subtract(1, "day"), "day")) {
      // If the given date is yesterday, display 'Yesterday'
      return "Yesterday";
    } else {
      // If the given date is in the past, display the day name
      return inputDate.format("dddd");
    }
  } else {
    return "-";
  }
};

export const yearFormat = (data) => {
  if (data) {
    return moment(data).format("YYYY");
  } else {
    return "-";
  }
};

export const humanReadable = (data) => {
  if (data) {
    return moment(data).fromNow();
  }
};

export const bookingType = (type) => {
  if (type === "App\\Models\\Coach") {
    return "Coaching";
  } else {
    return "Mental Health Coach";
  }
};
export const sellerType = (type) => {
  if (type === "App\\Models\\Coach") {
    return "Coach";
  } else {
    return "Player";
  }
};

export const timeFormat = (time) => {
  return moment(time, "HH:mm").format("hh:mm A");
};

export const actor = () => {
  const data = getRole();
  if (data === "admin") {
    return "/admin-api";
  } else if (data === "restaurant") {
    return "/restaurant-api";
  } else {
    return "/branch-api";
  }
};

export const usePageTitle = (title) => {
  const name = window.location.pathname
    .split(process.env.REACT_APP_BASE_NAME + "/")[1]
    .split("/")[0]
    .replace(/^\w/, (c) => c.toUpperCase());
  useEffect(() => {
    document.title =
      process.env.REACT_APP_WEBSITE_NAME +
      " " +
      name +
      " | " +
      title.charAt(0).toUpperCase() +
      title.slice(1);
  }, [title]);
};

export const tableStatus = (val) => {
  return val === 1 ? "Inactive" : "Active";
};

export const fullName = (val) => {
  if (val && val.first_name && val.last_name) {
    return val.first_name + " " + val.last_name;
  }
};

export const dataURLToFile = (dataURL, filename) => {
  const byteString = atob(dataURL.split(",")[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const fileBlob = new Blob([ab], { type: "image/png" });

  // Adjust the filename and type as needed
  return new File([fileBlob], filename, { type: "image/png" });
};

export const getImageAsFile = async (imageUrl, filename) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new File([blob], filename, { type: "image/png" });
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};

export const getStatusText = (status) => {
  switch (status) {
    case "pending":
      return <span className="pending-text">{status}</span>;
    case "requested":
      return <span className="requested-text">{status}</span>;
    case "rejected":
      return <span className="rejected-text">{status}</span>;
    case "approved":
      return <span className="accepted-text">{status}</span>;
    default:
      return status;
  }
};

export const getStatusDetailText = (statusDetail) => {
  switch (statusDetail) {
    case "Upcoming":
      return <span className="upcoming-text">{statusDetail}</span>;
    case "In-Progress":
      return <span className="pending-text">{statusDetail}</span>;
    case "Past":
      return <span className="past-text">{statusDetail}</span>;
    default:
      return statusDetail;
  }
};

export const getOrderStatus = (statusDetail) => {
  switch (statusDetail) {
    case "Delivered":
      return <span className="upcoming-text">{statusDetail}</span>;
    case "Pending":
      return <span className="pending-text">{statusDetail}</span>;
    default:
      return statusDetail;
  }
};

// Function to extract file extension from a URL

export const getFileExtension = (url) => {
  const parts = url.split(".");
  return parts[parts.length - 1];
};

// Function to determine image type based on file extension
export const getImageType = (extension) => {
  const imageTypes = {
    jpg: "jpeg",
    jpeg: "jpeg",
    png: "png",
    gif: "gif",
    // Add more extensions and corresponding types as needed
  };

  return imageTypes[extension.toLowerCase()] || "Unknown";
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getFileType = (fileName) => {
  const videoExtensions = ["mp4", "avi", "mov", "mkv"];
  const imageExtensions = ["jpg", "jpeg", "png", "gif"];

  const fileExtension = fileName.split(".").pop().toLowerCase();

  if (videoExtensions.includes(fileExtension)) {
    return "video";
  } else if (imageExtensions.includes(fileExtension)) {
    return "image";
  } else {
    return "unknown";
  }
};

export const validateImage = (file) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  const maxSize = 1024 * 1024; // 1MB

  if (!file) {
    return "No file selected.";
  }

  if (!allowedTypes.includes(file.type)) {
    return "Only JPEG, PNG, and GIF images are allowed.";
  }

  if (file.size > maxSize) {
    return "File size exceeds 1MB limit.";
  }

  return ""; // No errors
};

export const serialNumber = (num) => {
  return num < 10 ? "0" + num : num;
};

export const calculateIndex = (currentPage, selectedEntries) => {
  return (currentPage - 1) * selectedEntries + 1;
};

export const handleFileChange = (
  e,
  formData,
  setFormData,
  setUploadedImage
) => {
  const fileInput = e.target;
  const files = fileInput.files;
  if (files && files.length > 0) {
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      setUploadedImage(imageUrl);
      setFormData({ ...formData, image: file });
    };
    reader.readAsDataURL(file);
  }
};

export const getUserDetails = (user, data) => {
  const userDetails =
    user.sendable_id === data.id ? user.receiver : user.sender;
  return {
    profilePic: userDetails?.file?.file_url,
    firstName: userDetails?.first_name,
    role: userDetails?.role === "player" ? "" : userDetails?.role,
  };
};

export const isMyMessage = (message, data) => {
  return data.id === message.sendable_id || data.id === message.senderId;
};

export const getStatusProps = (status) => {
  const isActive = status === "Active";
  return {
    className: isActive ? "greenColor" : "redColor",
    text: isActive ? "Active" : "Inactive",
  };
};

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getLoyaltyImage = (level) => {
  switch (level) {
    case "bronze":
      return images.loyaltyImg1;
    case "silver":
      return images.loyaltyImg2;
    case "gold":
      return images.loyaltyImg3;
    default:
      return images.defaultImg; // Use a default image in case the level is not recognized
  }
};

export const convertMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0 && remainingMinutes > 0) {
    return `${hours} hour${
      hours > 1 ? "s" : ""
    } and ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    return `${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}`;
  }
};

export const generateLinks = (role) => {
  let Links = [];

  switch (role) {
    case "branch":
      Links = [
        {
          link: "/branch/dashboard",
          image: images.bSideIcon1,
          name: "Dashboard",
        },
        {
          link: "/branch/menu-management",
          image: images.bSideIcon2,
          name: "Menu Management",
        },
        {
          link: "/branch/ongoing-orders",
          image: images.bSideIcon3,
          name: "Ongoing Orders",
        },
        {
          link: "/branch/order-logs",
          image: images.bSideIcon4,
          name: "Order Logs",
        },
        {
          link: "/branch/late-delivery-ratio",
          image: images.bSideIcon5,
          name: "Late Delivery Ratio",
        },
        {
          link: "/branch/view-ratings-reviews",
          image: images.bSideIcon6,
          name: "View Ratings and Reviews",
        },
        {
          link: "/branch/contact-us",
          image: images.bSideIcon7,
          name: "Contact Us",
        },
      ];
      break;

    case "admin":
      Links = [
        {
          link: "/admin/dashboard",
          image: images.dashboardIcon,
          name: "Dashboard",
        },
        {
          link: "/admin/user-management",
          image: images.userMgIcon,
          name: "User Managements",
        },
        {
          link: "/admin/club-management",
          image: images.clubMgIcon,
          name: "Club Management",
        },
        {
          link: "/admin/query-management",
          image: images.queryMgIcon,
          name: "Query Management",
        },
      ];
      break;

    case "restaurant":
      Links = [
        {
          link: "/restaurant/dashboard",
          image: images.rSideIcon1,
          name: "Dashboard",
        },
        {
          link: "/restaurant/branch-management",
          image: images.rSideIcon2,
          name: "Branches Management",
        },
        {
          link: "/restaurant/product-management",
          image: images.rSideIcon3,
          name: "Product Management",
        },
        {
          link: "/restaurant/promocode-management",
          image: images.rSideIcon4,
          name: "Promocode Management",
        },
        {
          link: "/restaurant/loyalty-management",
          image: images.rSideIcon5,
          name: "Loyalty Management",
        },
        {
          link: "/restaurant/order-logs",
          image: images.rSideIcon6,
          name: "Order Logs",
        },
        {
          link: "/restaurant/contact-us",
          image: images.rSideIcon7,
          name: "Contact Admin",
        },
      ];
      break;

    default:
      Links = [];
  }

  return Links;
};

export const createSelectOptions = (selectArray) => {
  return selectArray.map((select) => ({
    title: select.title,
    options: select.options,
    selectedValue: select.state[0],
    setSelectedValue: select.state[1],
  }));
};
