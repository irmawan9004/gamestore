interface RowProps {
  label: string;
  value: string | number;
  classnames?: string;
}

export default function Row(props: Partial<RowProps>) {
  const { label, value, classnames } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={`purchase-details ${classnames}`}>{value}</span>
    </p>
  );
}
