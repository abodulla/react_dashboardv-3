import myImage from "./myImage.jpg";

const Header = () => {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10 bg-gray-900 rounded-3xl ">
        <img
          src={myImage}
          alt="profile"
          className="rounded-full pr-none w-30 h-20 object-cover m-8 mr-0 flex align-middle justify-center"
        />
        <h3 className="text-lg font-semibold text-gray-100 p-3">
          Abdallah Moaz
        </h3>
        <p className="text-gray-400 p-3">Abdallah.Moaz@gmail.com </p>
        <p className="p-3">I'am a Full Stack Devolper</p>
      </div>
    </>
  );
};

export default Header;
