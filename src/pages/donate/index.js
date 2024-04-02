import React from "react";

const DonatePage = () => {
  const zeffyFormSrc =
    "https://www.zeffy.com/en-CA/embed/donation-form/4a547ccc-4af8-4194-9d39-268ec242e32c";

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/contact.svg')] ">
      <div className="lg:flex lg:space-x-8 py-20 px-4">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "1200px",
            paddingTop: "100%",
          }}
        >
          <iframe
            title="Donation form powered by Zeffy"
            style={{
              position: "absolute",
              border: 0,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
              color: "red",
              backgroundColor: 'red'
            }}
            src={zeffyFormSrc}
            allowpaymentrequest
            allowTransparency="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
