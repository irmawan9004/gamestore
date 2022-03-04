import StepItem from "../../moleculs/StepItem";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br />
          Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            icon="/icon/step1.svg"
            title="1. Start"
            description1="Pilih salah satu game"
            description2="yang ingin kamu top up"
          />
          <StepItem
            icon="/icon/step2.svg"
            title="1. Fill Up"
            description1="Top up sesuai dengan"
            description2="nominal yang sudah tersedia"
          />
          <StepItem
            icon="/icon/step3.svg"
            title="1. Start"
            description1="Siap digunakan untuk"
            description2="improve pemahaman kamu"
          />
        </div>
      </div>
    </section>
  );
}
