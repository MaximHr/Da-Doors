const Footer = () => {
  return (
    <div className="footer px-8 py-6">
      <p className="text-sm sm:text-[16px] text-center text-white opacity-85">
        DA Doors | {new Date().getFullYear()} Всички права запазени.
      </p>
    </div>
  );
};

export default Footer;
