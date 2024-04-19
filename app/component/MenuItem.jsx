import Link from "next/link";

function MenuItem({ title, Icon, address }) {
  return (
    <li className="px-3 py-2">
      <Link href={address} className="flex items-center">
        <sapn className="block md:hidden text-xl">
          <Icon />
        </sapn>
        <span className="hidden md:block text-md">{title}</span>
      </Link>
    </li>
  );
}

export default MenuItem;
