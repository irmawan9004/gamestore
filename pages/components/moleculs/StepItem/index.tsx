interface StepItemProps {
  icon: "step1" | "step2" | "step3";
  title: string;
  description1: string;
  description2: string;
}

export default function StepItem(props: StepItemProps) {
  const { icon, title, description1, description2 } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          src={`/icon/${icon}.svg`}
          width={80}
          height={80}
          className="mb-30"
          alt="icon step"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {description1}
          <br />
          {description2}
        </p>
      </div>
    </div>
  );
}
