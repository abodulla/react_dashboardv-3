import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import { useNavigate } from "react-router-dom";
import myImage from "./myImage.jpg";

const Profile = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/profile");
  };
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src={myImage}
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">Abdallah Moaz</h3>
          <p className="text-gray-400">Abdallah.Moaz@example.com</p>
        </div>
      </div>

      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto"
        onClick={handleButtonClick}
      >
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
