import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { getDetailVoucher } from "../../services/player";
import Footer from "../components/organism/Footer";
import NavBar from "../components/organism/NavBar";
import TopUpForm from "../components/organism/TopUpForm";
import TopUpItem from "../components/organism/TopUpItem";

export default function Detail() {
  const { query, isReady } = useRouter();

  const getVoucherDetailApi = useCallback(async (id) => {
    const data = await getDetailVoucher(id);
    console.log("data:", data);
  }, []);

  useEffect(() => {
    if (isReady) {
      console.log("router sudah tersedia", query.id);
      getVoucherDetailApi(query.id);
    } else {
      console.log("router tidak tersedia");
    }
  }, [isReady]);
  return (
    <>
      <NavBar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" />
              <hr />
              <TopUpForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
