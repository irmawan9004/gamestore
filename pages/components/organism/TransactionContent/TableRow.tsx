import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface TableRowProps {
  title: string;
  category: string;
  itemTotal: number;
  price: number;
  status: "Pending" | "Success" | "Failed";
  image: string;
  itemDetail: string;
}
export default function TableRow(props: TableRowProps) {
  const { image, title, category, itemTotal, itemDetail, price, status } =
    props;

  const statusClass = cx({
    "float-start": true,
    "icon-status": true,
    pending: status === "Pending",
    failed: status === "Failed",
    success: status === "Success",
  });
  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image src={`/img/${image}.png`} width={80} height={60} alt="" />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {itemTotal} {itemDetail}
        </p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">Rp .{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href="../member/transactions/detail">
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}
