import React, { useState } from "react";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import CustomInput from "../../../Components/CustomInput";
import CustomButton from "../../../Components/CustomButton";
import { Formik } from "formik";
import { clubValidationSchema } from "../../../Config/Validations";
import CustomModal from "../../../Components/CustomModal";
import { useFormStatus } from "../../../Hooks/useFormStatus";

const CreateClub = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook

    const actionMethod = () =>{
        setShow2(true);
        setShow(false);
    }

     const handleSubmit = (values) => {
      startSubmitting();
      console.log("Form Values: ", values);
      // Simulate async submission (e.g., API call)
      setTimeout(() => {
        stopSubmitting();
        // setShow2(true);
        // setShow(false); // Show success modal after submission
      }, 1000);
    };
   


  return (
    <DashboardLayout  pageTitle="Create Club">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="my-4">
              <h2 className="mainTitle mt-2">
                <BackButton />
                Create Club
              </h2>
            </div>
            <div className="dashCard">
              <div className="row">
                <div className="col-xxl-5 col-xl-7 col-lg-8 col-md-10">
                  <Formik
                    initialValues={{
                      club_name: "",  
                      email: "",
                      first_name: "",
                      last_name: ""
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
                            onClick={()=>setShow(true)}
                            variant="primaryBtn"
                            className="px-5"
                            text="Create Club"
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
            close={()=>setShow(false)}
            action={actionMethod}
            heading="Are You Sure You want to Create Club?"
            />
            <CustomModal
            show={show2}
            close={()=>setShow2(false)}
            action={handleSubmit}
            success
            heading="Club Has Been Created Successfully!"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateClub;
