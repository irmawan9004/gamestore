import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-card"
    | "ic-menu-logout"
    | "ic-menu-messages"
    | "ic-menu-rewards"
    | "ic-menu-settings"
    | "ic-menu-transactions";
  active?: boolean;
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = "/member" } = props;
  const classItem = cx({
    "mb-30": true,
    item: true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
