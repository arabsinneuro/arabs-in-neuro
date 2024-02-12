const InstructorCard = ({ name, affiliation }) => (
  <div className="w-96 h-32 bg-cWhite rounded-md shadow-md p-4 m-5 overflow-hidden flex flex-col justify-center items-center">
    <h2 className="text-xl font-bold text-center">{name}</h2>
    <p className="mt-2 text-center">{affiliation}</p>
  </div>
);

const InstructorsList = ({ instructors, instructorsTitle }) => {
  return (
    <div className="lg:px-20 px-5">
      <h1 className="mt-20 mb-10 text-2xl text-cN600 font-extrabold">
        {instructorsTitle}
      </h1>
      <div className="flex flex-wrap">
        {instructors && instructors.map((instructor, index) => (
          <InstructorCard
            key={index}
            name={instructor.name}
            affiliation={instructor.affiliation}
          />
        ))}
      </div>
    </div>
  );
};
export default InstructorsList;
