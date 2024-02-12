import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed-top bg-white py-3">
      <div className="col-12 text-center justify-center">
        <a className="blog-header-logo text-dark" href="#">
          <Image width={96} height={38} src="/assets/logo.png" />
        </a>
      </div>
    </header>
  );
};

export default Header;
