import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/service",
    label: "Service",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/gallery",
    label: "Gallery",
  },
  {
    href: "/profil",
    label: "Profil",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-dark p-4 text-white">
      <div className="mx-auto flex w-full max-w-6xl justify-between">
        <Link href="/" className="text-xl font-medium">
          <span className="text-green-500">Event</span>
          Go
        </Link>

        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-green-500">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
