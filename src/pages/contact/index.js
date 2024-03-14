import RootLayout from "../../app/layout";
import OverviewComponent from "./components/overview";
import FormComponent from "./components/form";

function ContactPage() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/contact.svg')] ">
      <div className="px-4">
        <div className="lg:flex lg:space-x-8 py-20">
          <OverviewComponent />

          <FormComponent />
        </div>

        {/* <SocialMediaLinksComponent /> */}
      </div>
    </div>
  );
}
ContactPage.Layout = RootLayout;

export default ContactPage;
