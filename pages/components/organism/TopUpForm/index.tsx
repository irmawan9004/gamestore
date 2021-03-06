import { useRouter } from "next/router";
import { useState } from "react";
import {
  BanksTypes,
  NominalsTypes,
  PaymentTypes,
} from "../../../../services/data-types";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

interface TopUpFormTypes {
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}
export default function TopUpForm(props: TopUpFormTypes) {
  const [verifyId, setVerifyID] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const [bankAccountName, setBankAccountName] = useState("");
  const { nominals, payments } = props;
  const router = useRouter();
  const onPaymentItemChange = (payment: PaymentTypes, bank: BanksTypes) => {
    const data = {
      payment,
      bank,
    };
    setPaymentItem(data);
  };
  const onChangeIdClick = (data: NominalsTypes) => {
    setNominalItem(data);
  };

  const onSubmit = (data) => {
    console.log("verifyID :", verifyId);
    console.log("bankAccount :", bankAccountName);
    console.log("nominalItem  :", nominalItem);
    console.log("paymentItem  :", paymentItem);
    if (
      verifyId === "" ||
      bankAccountName === "" ||
      nominalItem === {} ||
      paymentItem === {}
    ) {
      alert("Silahkan isi semua data!!");
    } else {
      const data = {
        verifyId,
        nominalItem,
        paymentItem,
        bankAccountName,
      };
      localStorage.setItem("data-top-up", JSON.stringify(data));
      router.push("/checkout");
    }
  };

  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyId}
            onChange={(event) => setVerifyID(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalItem
              key={nominal._id}
              _id={nominal._id}
              coinName={nominal.coinName}
              coinQuantity={nominal.coinQuantity}
              price={nominal.price}
              onChange={() => onChangeIdClick(nominal)}
            />
          ))}

          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) =>
              payment.banks.map((bank) => (
                <PaymentItem
                  bankId={bank._id}
                  type={payment.type}
                  name={bank.bankName}
                  onChange={() => onPaymentItemChange(payment, bank)}
                />
              ))
            )}
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(event) => setBankAccountName(event.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          onClick={onSubmit}
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
