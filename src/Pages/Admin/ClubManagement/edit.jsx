import React, { useEffect, useState } from "react";
import { useFormStatus } from "../../../Hooks/useFormStatus";
import LoadingSpinner from "../../../Components/Loader";
import { clubManagementData } from "../../../Config/Data";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import { Formik } from "formik";
import { clubValidationSchema } from "../../../Config/Validations";
import CustomInput from "../../../Components/CustomInput";
import CustomModal from "../../../Components/CustomModal";
import CustomButton from "../../../Components/CustomButton";

const EditClub = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook

  const [clubData, setClubData] = useState(null);

 
  useEffect(() => {
    const response = clubManagementData?.detail?.data?.find((itme) => itme.id == 1);
    setClubData(response);
  }, []);

  // const getUser = async () => {
  //   // const response = await getDetails(`/admin-api/users/${id}`);
  //   const response = clubManagementData?.detail?.data?.find((item) => item.id === Number(id))
  //   if (response) {
  //     setClubData(response);
  //   }
  // };

  // useEffect(() => {
    
  //   getUser();
  // }, [id]);

  const actionMethod = () => {
    setShow2(true);
    setShow(false);
  };

  const handleSubmit = (values) => {
    startSubmitting();
    console.log("Updated Form Values: ", values);
    // Simulate async submission (e.g., API call)
    setTimeout(() => {
      stopSubmitting();
      // You might want to redirect or perform other actions after successful submission
    }, 1000);
  };

  if (!clubData)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

    console.log(clubData)

  return (
    <DashboardLayout pageTitle="Edit Club">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="my-4">
              <h2 className="mainTitle mt-2">
                <BackButton />
                Edit Club
              </h2>
            </div>
            <div className="dashCard">
              <div className="row">
                <div className="col-xxl-5 col-xl-7 col-lg-8 col-md-10">
                  <Formik
                    initialValues={{
                      club_name: clubData.club_name || "",
                      email: clubData.email || "",
                      first_name: clubData.first_name || "",
                      last_name: clubData.last_name || "",
                      // ...additionalField,
                    }}
                    validationSchema={clubValidationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <form className="mt-3" onSubmit={handleSubmit}>
                        <CustomInput
                          label="Club Name"
                          id="club_name"
                          type="text"
                          required
                          placeholder="Enter Club Name"
                          labelclass="mainLabel"
                          inputclass="mainInput mainInputLogIn"
                          value={values.club_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.club_name && errors.club_name}
                        />
                        <CustomInput
                          label="Email Address"
                          id="email"
                          type="email"
                          required
                          placeholder="Enter Your Email Address"
                          labelclass="mainLabel"
                          inputclass="mainInput mainInputLogIn"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && errors.email}
                        />
                        <CustomInput
                          label="Coach First Name"
                          id="first_name"
                          type="text"
                          required
                          placeholder="Enter Coach First Name"
                          labelclass="mainLabel"
                          inputclass="mainInput mainInputLogIn"
                          value={values.first_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.first_name && errors.first_name}
                        />
                        <CustomInput
                          label="Coach Last Name"
                          id="last_name"
                          type="text"
                          required
                          placeholder="Enter Coach Last Name"
                          labelclass="mainLabel"
                          inputclass="mainInput mainInputLogIn"
                          value={values.last_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.last_name && errors.last_name}
                        />
                        <div className="mt-4">
                          <CustomButton
                            onClick={() => setShow(true)}
                            variant="primaryBtn"
                            className="px-5"
                            text="Update"
                            pendingText="Loading..."
                            isPending={isSubmitting}
                            type="submit"
                          />
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
            <CustomModal
              show={show}
              close={() => setShow(false)}
              action={actionMethod}
              heading="Are You Sure You want to Edit Club?"
            />
            <CustomModal
              show={show2}
              close={() => setShow2(false)}
              action={handleSubmit}
              success
              heading="Club Has Been Edited Successfully!"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditClub;
