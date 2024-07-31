import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import CustomInput from "../../../Components/CustomInput";
import CustomButton from "../../../Components/CustomButton";
import CustomModal from "../../../Components/CustomModal";
import BackButton from "../../../Components/BackButton";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { adminProfileValidation } from "../../../Config/Validations";
import { post } from "../../../Services/Api";
import { setData } from "../../../Store/actions";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import { images } from "../../../Assets";
import { useAuth } from "../../../Hooks/useAuth";
import { userDetail } from "../../../Config/Data";

const EditProfile = () => {
  const navigate = useNavigate();
  const [imageObject, setImageObject] = useState({});
  const [profileData, setProfileData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [profilePic, setProfilePic] = useState();
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    setProfileData(user);
    setProfilePic(user?.file?.file_url);
  }, []);

  const handleImageChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
    setImageObject(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    startSubmitting();
    values.image = imageObject;
    // let response = await post("/admin-api/account", values);
    let response = userDetail;
    if (response.status) {
      dispatch(setData(response.detail));
      setShowModal(true);
    } else {
      console.log("error");
    }
    stopSubmitting();
  };

  return (
    <>
      <DashboardLayout pageTitle="Edit Profile">
      <h2 className="mainTitle my-4">
                <BackButton />
                Edit Profile
              </h2>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            {profileData ? (
              <div className="col-lg-8">
                {Object.keys(profileData).length > 0 && (
                  <Formik
                    initialValues={{
                      fullName: profileData.fullName || "",
                      email: profileData.email || "",
                      phone: profileData.phone || "",
                    }}
                    validationSchema={adminProfileValidation}
                    onSubmit={handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => {
                      return (
                        <form onSubmit={handleSubmit}>
                          <div className="row mb-3">
                            <div className="col-lg-4 mb-3">
                              <div className="profileImage">
                                <img
                                  src={profilePic ?? images.userImage}
                                  alt="User"
                                />
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="d-none"
                                  id="profileImage"
                                  onChange={(event) => handleImageChange(event)}
                                />
                                <label
                                  htmlFor="profileImage"
                                  className="imageUploadButton"
                                >
                                  <FontAwesomeIcon icon={faCamera} />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="row mb-3">
                                <div className="col-md-8">
                                  <CustomInput
                                    label="Full Name"
                                    labelclass="mainLabel"
                                    type="text"
                                    required
                                    placeholder="Enter Name"
                                    inputclass="mainInput"
                                    id="fullName"
                                    value={values.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.fullName && errors.fullName}
                                  />
                                </div>
                              </div>

                              <div className="row mb-3">
                                <div className="col-md-8">
                                <CustomInput
                                    label="Email Address"
                                    labelclass="mainLabel"
                                    readOnly
                                    type="text"
                                    placeholder="Enter Email"
                                    inputclass="mainInput"
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && errors.email}
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-4">
                                  <CustomButton
                                    variant="primaryBtn"
                                    className="px-5"
                                    text="Update"
                                    pendingText="Submitting..."
                                    isPending={isSubmitting}
                                    type="submit"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      );
                    }}
                  </Formik>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <CustomModal
          show={showModal}
          close={() => {
            setShowModal(false);
            navigate(`/admin/profile`);
          }}
          success
          heading="Your Profile Has Been Updated Successfully."
        />
      </DashboardLayout>
    </>
  );
};

export default EditProfile;
