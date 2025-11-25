import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container site-header__inner">
        <Link href="/" className="site-header__logo">
          <Image
            src="/my-logo.webp"
            alt="Trusted Online Loans"
            width={60}
            height={40}
            className="site-header__logo-img"
            priority
          />
        {/* chữ bên cạnh logo */}
          <div className="site-header__logo-text">
            <span className="site-header__logo-name">Trusted Online Loans</span>
            {/* nếu muốn có dòng nhỏ phía dưới thì bật dòng này */}
            {/* <span className="site-header__logo-tagline">A smarter way to borrow</span> */}
          </div>
        </Link>
      </div>
    </header>
  );
}
