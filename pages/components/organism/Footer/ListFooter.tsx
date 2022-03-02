import Link from "next/link";

interface ListFooterProps {
  list: string;
  href: string;
}

export default function ListFooter(props: Partial<ListFooterProps>) {
  const { list, href = "/" } = props;
  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{list}</a>
      </Link>
    </li>
  );
}
