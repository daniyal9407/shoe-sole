import { useNavigate } from "react-router";
import "./style.css";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import CustomButton from "../../../Components/CustomButton";
import { useAuth } from "../../../Hooks/useAuth";
import { images } from "../../../Assets";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <DashboardLayout pageTitle="My Profile">
      <h2 className="mainTitle my-4">My Profile</h2>
        <div className="dashCard mb-4">
          <div className="row mb-3">
            {user ? (
              <div className="col-12">
                <div className="row mb-3">
                  <div className="col-lg-12 order-2 order-lg-1 mb-3">
                    <div className="profileImage">
                      <img src={user?.file?.file_url} alt="User" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row mb-4">
                      <div className="col-lg-12 mb-3">
                        <h4 className="secondaryLabel">Full Name</h4>
                        <p className="secondaryText">{user?.fullName}</p>
                      </div>
                      <div className="col-lg-12 mb-3">
                        <h4 className="secondaryLabel">Email Address</h4>
                        <p className="secondaryText">{user?.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <CustomButton
                      type="button"
                      variant="primaryBtn"
                      className="px-5 mb-2"
                      text="Edit Profile"
                      onClick={() => {
                        navigate("/admin/edit-profile");
                      }}
                    />
                    <CustomButton
                      type="button"
                      variant="secondaryBtn"
                      className="primaryColor ms-3 mb-2"
                      text="Change Passoword"
                      onClick={() => {
                        navigate("/admin/change-password");
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Profile;
