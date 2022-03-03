import cx from "classnames";

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
  const { title, category, status, itemTotal, price, image, itemDetail } =
    props;
  const statusClass = cx({
    "float-start": true,
    "icon-status": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width={80}
          height={60}
          alt=""
        />
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
        <p className="fw-medium text-start color-palette-1 m-0">Rp .{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
