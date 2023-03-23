import Link from "next/link";

const NavElemetn = ({ href, name }) => {
  return (
    <li>
      <Link
        className="bg-inherit w-32 h-12 flex justify-center items-center rounded-md hover:bg-zinc-300 hover:text-white "
        href={href}
      >
        {name}
      </Link>
    </li>
  );
};

const Header = () => {
  return (
    <header className=" bg-zinc-100 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex gap-4">
            <NavElemetn href="/" name="خانه" />
            <NavElemetn href="/blog" name="وبلاگ" />
            <NavElemetn href="/movies" name="فیلم ها" />
          </ul>
        </nav>
        <div className="text-3xl">موووی باز</div>
      </div>
    </header>
  );
};

export default Header;
