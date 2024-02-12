import Overview from "./components/overview";
import SchoolDetails from "./components/schoolDetails";
import Feedback from "./components/feedback";
import SchoolDescription from "./components/schoolDescription";

function SchoolPage() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/opportunities.svg')]">
    
      <Overview />

      {/* <SchoolDetails /> */}

      <SchoolDescription />

      <Feedback />
    </div>
  );
}
export default SchoolPage;