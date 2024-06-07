const Notfound = () => {
  return (
    <>
      <section className="flex h-screen w-full items-center justify-center px-4">
        <div align="center" className="notfound">
          {/* <img className="h-[250px]" src={Image.text404} alt=""></img> */}
          <h1 className="mb-3 text-[120px]">404</h1>
          <h2 className="mt-[-50px] text-[24px] font-semibold">
            Page not found
          </h2>
          <p className="text-[14px]">
            The page you are looking for might have been removed <br /> had its
            name changed or it temporarily unavailable
          </p>
          <a href="/">
            <button className="mt-3 rounded-full bg-black px-3 py-4 text-[14px] text-white ring-1 ring-black transition hover:bg-white hover:text-black">
              GO TO HOMEPAGE
            </button>
          </a>
        </div>
      </section>
    </>
  );
};
export default Notfound;
