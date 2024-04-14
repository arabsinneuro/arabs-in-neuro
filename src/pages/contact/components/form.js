import React, { useState, useEffect } from "react";
import { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";

const FormComponent = () => {
  const languageContext = useContext(LanguageContext);
  const { currentContent } = languageContext;
  const {
    name,
    email,
    subject,
    message,
    captchaMath,
    submit,
    incorrectCaptcha,
    messageReceived,
  } = currentContent.contact;
  const [captcha, setCaptcha] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const submittedParam = urlParams.get("submitted");

    if (submittedParam === "true") {
      setSubmittedMessage(messageReceived);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captcha !== "5") {
      alert(incorrectCaptcha);
      return false;
    }
    window.submitted = true;
    event.target.submit();
    alert(messageReceived);
    setSubmittedMessage(messageReceived);
  };

  return (
    <div className="lg:w-1/2">
      <div className="publications">
        <script type="text/javascript">var submitted = false;</script>

        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
          onLoad={() => {
            if (window.submitted) {
              window.location = "?submitted=true";
            }
          }}
        ></iframe>

        <form
          id="contactform"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdF6btSqvrYiskbvssC3O74JIVhe-hpbyALAcNN9sf2eZRjCA/formResponse"
          method="post"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
        >
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label htmlFor="name" className="font-bold">
                {name}
              </label>
              <input
                type="text"
                className="form-control border-cN300 shadow-md p-2 rounded-md my-2 w-full"
                id="name"
                placeholder={name}
                name="entry.435430897"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="font-bold">
                {email}
              </label>
              <input
                type="email"
                className="form-control border-gray-300 shadow-md p-2 rounded-md my-2 w-full"
                id="email"
                placeholder={email}
                name="entry.86580912"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="font-bold">
                {subject}
              </label>
              <input
                type="text"
                className="form-control border-cN300 shadow-md p-2 rounded-md my-2 w-full"
                id="subject"
                placeholder={subject}
                name="entry.1456137451"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-bold">
                {message}
              </label>
              <textarea
                rows="5"
                className="form-control border-cN300 shadow-md p-2 rounded-md my-2 w-full"
                id="message"
                placeholder={message}
                name="entry.1141301720"
                required
              ></textarea>
            </div>
          </div>

          <div>
            <label htmlFor="captcha" className="font-bold">
              {captchaMath}
            </label>
            <input
              type="text"
              className="form-control border-cN300 shadow-md p-2 rounded-md my-2 w-full"
              id="captcha"
              placeholder="3 + 2"
              name="entry.203517468"
              onChange={(e) => setCaptcha(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              className="w-full flex items-center justify-center bg-cGreen text-white px-5 py-2 rounded-md"
              type="submit"
              role="button"
            >
              {submit}
              <img className="ml-2" src="/icons/send.svg" alt="send" />
            </button>
          </div>
          {submittedMessage && (
            <div className="flex justify-center items-center bg-green-200 text-green-800 p-3 my-4">
              {messageReceived}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
