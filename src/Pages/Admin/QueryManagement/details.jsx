import { images } from "../../../Assets";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import { getDetails } from "../../../Services/Api";
import { queryManagementData } from "../../../Config/Data";
import CustomModal from "../../../Components/CustomModal";

const QueryDetails = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const getUser = async () => {
      // const response = await getDetails(`/admin-api/users/${id}`);
      const response = queryManagementData?.detail?.data?.find(
        (item) => item.id === Number(id)
      );
      if (response) {
        setProfileData(response);
      }
    };
    getUser();
  }, [id]);
  console.log(profileData);

  const { name, email, date, type, subject, Message } = profileData;

  return (
    <DashboardLayout pageTitle="Query Details">
      <h2 className="mainTitle my-4">
        <BackButton />
        View Query
      </h2>
      <div className="dashCard mb-4">
        <div className="row mb-3">
          <div className="col-xxl-6 col-xl-8 col-lg-10">
            <div className="row mt-4">
              <div className="col-xl-3 mb-2">
                <h4 className="secondaryLabel text-secondary">Name:</h4>
                <p className="secondaryText fw-bold">{name}</p>
              </div>
              <div className="col-xl-4 mb-2">
                <h4 className="secondaryLabel text-secondary">Email:</h4>
                <p className="secondaryText fw-bold">{email}</p>
              </div>
              <div className="col-xl-4 mb-2">
                <h4 className="secondaryLabel text-secondary">Subject:</h4>
                <p className="secondaryText fw-bold">{subject}</p>
              </div>
            </div>
            <div className="row mt-xl-4">
              <div className="col-xl-3 mb-2">
                <h4 className="secondaryLabel text-secondary">Date:</h4>
                <p className="secondaryText fw-bold">{date}</p>
              </div>
              <div className="col-xl-3">
                <h4 className="secondaryLabel text-secondary">User Type:</h4>
                <p className="secondaryText fw-bold">{type}</p>
              </div>
            </div>
            <div className="row mt-xl-4 mt-3">
              <div className="col-12">
                <h4 className="secondaryLabel text-secondary">Message:</h4>
                <p className="secondaryText fw-bold">{Message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default QueryDetails;
