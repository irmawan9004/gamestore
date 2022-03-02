interface TitleFooterProps {
  title: string;
}
export default function TitleFooter(props: TitleFooterProps) {
  const { title } = props;
  return <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>;
}
