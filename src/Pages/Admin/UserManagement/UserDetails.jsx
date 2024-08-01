import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "../../../Components/AdminLayout/DashboardLayout";
import BackButton from "../../../Components/BackButton";
import { getDetails } from "../../../Services/Api";
import { images } from "../../../Assets";
import { userData, userManagementData } from "../../../Config/Data";
import CustomModal from "../../../Components/CustomModal";

const UserDetails = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});
  const [activeModal, setActiveModal] = useState(false);
  const [activeModal2, setActiveModal2] = useState(false);
  const [inactiveModal, setInactiveModal] = useState(false);
  const [inactiveModal2, setInactiveModal2] = useState(false);
  const [selectedClub, setSelectedClub] = useState('Club Abc');
  useEffect(() => {
    const getUser = async () => {
      // const response = await getDetails(`/admin-api/users/${id}`);
      const response = userManagementData?.detail?.data?.find((item) => item.id === Number(id))
      if (response) {
        setProfileData(response);
      }
    };
    getUser();
  }, [id]);
  console.log(profileData)

  const {
    file,
    first_name,
    last_name,
    full_name,
    email,
    phone_number,
    profileStatus,
    status_detail,
    Dob
  } = profileData;

  const handleClubChange = (event) => {
    setSelectedClub(event.target.value);
    // You can also perform other actions here, such as making an API call
    console.log('Selected club:', event.target.value);
  };

  const actionMethod = () =>{
    setActiveModal2(true);
    setActiveModal(false);
  }

  const actionMethod2 = () =>{
    setInactiveModal2(true);
    setInactiveModal(false);
  }

  return (
    <DashboardLayout pageTitle="User Details">
      <h2 className="mainTitle my-4">
        <BackButton />
        View User Details
      </h2>
      <div className="dashCard mb-4">
        <h2 className="mb-4">{full_name}</h2>
        <div className="row mb-3">
          <div className="col-lg-6 order-2 order-lg-1 mb-3">
            <div className="profileImage">
              <img src={file?.file_url ?? images.placeholder} alt="User" />
            </div>
          </div>
          <div className="col-lg-6 text-lg-end order-1 order-lg-2 mb-3">
            <label className="fw-semibold">Profile Status :</label>
            <span className={`fw-semibold ms-1 ${status_detail == "Active" ? "Active" : "Inactive"}`}>{status_detail}</span>
            <div className="mt-2">
              {profileStatus ?  <button className="primaryBtn" onClick={()=>setActiveModal(true)}>Inactive User</button> : <button className="primaryBtn"
              onClick={()=>setInactiveModal(true)}>Active User</button>}
              
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-xxl-6 col-xl-8 col-md-10">
            <div>
              <label className="text-secondary fw-medium mb-2">Assigned Club:</label>
              <select className="d-block w-auto mainInput showPadding text-dark fw-bold"
                onChange={handleClubChange}
              >
                <option value={selectedClub}>Club Abc</option>
                <option value={selectedClub}>Club 2</option>
                <option value={selectedClub}>Club 3</option>
              </select>
            </div>
            <div className="row mt-4">
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
              <h4 className="secondaryLabel text-secondary">First Name</h4>
              <p className="secondaryText fw-bold">{first_name}</p>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
              <h4 className="secondaryLabel text-secondary">Last Name</h4>
              <p className="secondaryText fw-bold">{last_name}</p>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
              <h4 className="secondaryLabel text-secondary">Email</h4>
              <p className="secondaryText fw-bold">{email}</p>
              </div>
            </div>
            <div className="row mt-xl-4">
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
              <h4 className="secondaryLabel text-secondary">Phone Number</h4>
              <p className="secondaryText fw-bold">{phone_number}</p>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6 mb-2">
              <h4 className="secondaryLabel text-secondary">Date Of Birth</h4>
              <p className="secondaryText fw-bold">{Dob}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
       heading="Are You Sure You Want to Inactive This User?"
       para=""
       action={actionMethod}
       show={activeModal}
       close={()=>setActiveModal(false)} 
       />
       <CustomModal
       success
       heading="This User Has Been Inactivated Successfully!"
       para=""
       show={activeModal2} 
       close={()=>setActiveModal2(false)}
       />
       <CustomModal
       heading="Are You Sure You Want to Aactive This User?"
       para=""
       action={actionMethod2}
       show={inactiveModal}
       close={()=>setInactiveModal(false)} 
       />
       <CustomModal
       success
       heading="This User Has Been activated Successfully!"
       para=""
       show={inactiveModal2} 
       close={()=>setInactiveModal2(false)}
       />
    </DashboardLayout>
  );
};

export default UserDetails;
