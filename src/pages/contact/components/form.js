import React from "react";

const FormComponent = () => {
  return (
    <div>
      <p id="thanks"></p>
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
          onSubmit={() => {
            submitted = true;
          }}
          className="max-w-lg mx-auto"
        >
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label htmlFor="name" className="font-bold">
                Name*
              </label>
              <input
                type="text"
                className="form-control border-cN300 shadow-md p-2 rounded-md my-2 w-full"
                id="name"
                placeholder="Name*"
                name="entry.435430897"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="font-bold">
                Email Address*
              </label>
              <input
                type="email"
                className="form-control border-gray-300 shadow-md p-2 rounded-md my-2 w-full"
                id="email"
                placeholder="Email address*"
                name="entry.86580912"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="font-bold">
                Subject*
              </label>
              <input
                type="text"
                className="form-control border-cN300 shadow-md p-2 rounded-md my-2 w-full"
                id="subject"
                placeholder="Subject*"
                name="entry.1456137451"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-bold">
                Message*
              </label>
              <textarea
                rows="5"
                className="form-control border-cN300 shadow-md p-2 rounded-md my-2 w-full"
                id="message"
                placeholder="Message*"
                name="entry.1141301720"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="flex items-center bg-cGreen text-white px-5 py-2 rounded-md"
              type="submit"
              role="button"
            >
              Submit
              <img className="ml-2" src="icons/send.svg" alt="send" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
