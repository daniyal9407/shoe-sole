import "./style.css";
import ConsolidatedNotifications from "../../../Components/ConsolidatedNotifications";
import { notificationsData } from "../../../Config/Data";

const Notifications = () => {
  // const apiEndpoints = [`/admin-api/notifications`];
  const apiEndpoints = notificationsData;
  return <ConsolidatedNotifications apiEndpoints={apiEndpoints} />;
};

export default Notifications;
