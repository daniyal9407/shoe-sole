import { useState } from "react";
import { useNavigate } from "react-router";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import "./style.css";
import CustomModal from "../../../Components/CustomModal";
import { post } from "../../../Services/Api";
import ChangePasswordForm from "../../../Components/ChangePasswordForm";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async (values) => {
    // let response = await post("/admin-api/account/change-password", values);
    // if (response.status) {
      setShowModal(true);
      setTimeout(() => navigate("/admin/profile"), 1000);
    // } else {
    //   if (response.errors) {
    //     response.message = response.errors["password"][0];
    //   }
    // }
  };
  return (
    <>
      <DashboardLayout pageTitle="Change Password">
        <h2 className="mainTitle my-4">
          <BackButton />
          Change Password
        </h2>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10">
              <ChangePasswordForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>

        <CustomModal
          show={showModal}
          close={() => {
            setShowModal(false);
          }}
          success
          heading="Password changed successfully"
        />
      </DashboardLayout>
    </>
  );
};

export default ChangePassword;
