import Overview from "./components/overview";
import SchoolDetails from "./components/schoolDetails";
import Feedback from "./components/feedback";

function SchoolPage() {
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/opportunities.svg')]">
    
      <Overview />

      <SchoolDetails />

      <Feedback />
    </div>
  );
}
export default SchoolPage;