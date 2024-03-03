import Image from "../image";
const Notfound = () => {
  return (
    <>
      <section className="h-screen w-full flex justify-center items-center px-4">
        <div align="center" className="notfound">
          <img className="h-[250px]" src={Image.text404} alt=""></img>
          <h2 className="text-[24px] mt-[-50px] font-semibold">
            Page not found
          </h2>
          <p className="text-[14px]">
            The page you are looking for might have been removed <br /> had its
            name changed or it temporarily unavailable
          </p>
          <a href="/">
            <button className="text-white px-3 py-4 rounded-full mt-3 text-[14px]">
              GO TO HOMEPAGE
            </button>
          </a>
        </div>
      </section>
    </>
  );
};
export default Notfound;
