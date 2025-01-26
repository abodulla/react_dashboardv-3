import Header from "../components/common/Header";
import Header_profile from "../components/profile/Header_profile";
import About_me from "../components/profile/About_me";

const Profile_Page = () => {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10">
        <Header title={"Profile"} />
        <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
          <Header_profile />
          <About_me />
        </main>
      </div>
    </>
  );
};

export default Profile_Page;
