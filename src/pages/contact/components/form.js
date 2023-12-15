// FormComponent.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const FormComponent = () => {
  return (
    <div>
      <p id="thanks"></p>
      <div className="publications">
        <script type="text/javascript">var submitted=false;</script>
        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
          onLoad="if(submitted) {window.location='?submitted=true';}"
        ></iframe>
        <form
          id="contactform"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdF6btSqvrYiskbvssC3O74JIVhe-hpbyALAcNN9sf2eZRjCA/formResponse"
          method="post"
          target="hidden_iframe"
          onSubmit="submitted=true;"
        >
          <div className="grid">
            <div className="cell cell--2">
              <label htmlFor="name"  className="font-bold">Name*</label>
            </div>
            <div className="cell cell--auto">
              <input
                type="text"
                size="50"
                className="form-control border-cN300 shadow-md p-2 rounded-md  my-2"
                id="name"
                placeholder="Name*"
                name="entry.435430897"
                required
              />
            </div>
            <br />
            <br />
          </div>
          <div className="grid">
            <div className="cell cell--2">
              <label htmlFor="email"  className="font-bold">Email Address*</label>
            </div>
            <div className="cell cell--auto">
              <input
                type="email"
                size="50"
                className="form-control border-gray-300 shadow-md p-2 rounded-md  my-2"
                id="email"
                placeholder="Email address*"
                name="entry.86580912"
                required
              />
            </div>
            <br />
            <br />
          </div>
          <div className="grid">
            <div className="cell cell--2">
              <label htmlFor="subject"  className="font-bold">Subject*</label>
            </div>
            <div className="cell cell--auto">
              <input
                type="text"
                size="50"
                className="form-control border-cN300 shadow-md p-2 rounded-md  my-2"
                id="subject"
                placeholder="Subject*"
                name="entry.1456137451"
              />
            </div>
            <br />
            <br />
          </div>
          <div className="grid">
            <div className="cell cell--2">
              <label htmlFor="message"  className="font-bold">Message*</label>
            </div>
            <div className="cell cell--auto">
              <textarea
                rows="5"
                cols="53"
                className="form-control border-cN300 shadow-md p-2 rounded-md my-2"
                id="message"
                placeholder="Message*"
                name="entry.1141301720"
                required
              ></textarea>
            </div>
            <br />
            <br />
          </div>
          <div className="text-right">
            <button
              className="bg-cGreen text-white px-4 py-2 rounded-md submit submit--primary submit--pill "
              type="submit"
              role="button"
            >
              Submit
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-white ml-2"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
