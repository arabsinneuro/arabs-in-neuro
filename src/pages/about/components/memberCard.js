import React from "react";

const MemberCard = ({
  name,
  role,
  team,
  affiliation,
  image,
  linkedinLink,
  twitterLink,
  emailText,
}) => {
  const backgroundColorClass = image ? "bg-cN500" : "bg-cPink";
  const width = image? "w-60" : "w-80";

  return (
    <div
      className={`${backgroundColorClass} rounded-md p-4 p-4 flex flex-col items-center mx-4 ${width}`}
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="mb-2"
        />
      )}

      <div className="flex w-full">
        {!team && (
          <div className="flex-grow flex flex-col items-center justify-center w-full">
            <h2 className="text-lg font-bold text-cWhite mb-2">{name}</h2>
            <p className="text-sm font-bold text-cWhite mb-2">{role}</p>
            <h3 className="text-sm italic text-cWhite mb-2 text-center">
              Affiliation:
            </h3>
            <p className="text-sm text-cWhite">{affiliation}</p>
          </div>
        )}

        {team && (
          <div className="flex-grow flex flex-col justify-center pr-4">
            <div className=" items-center mb-2">
            <h2 className="text-lg font-bold text-cWhite text-center">
              {name}
            </h2>
            <h3 className="text-sm italic text-cWhite mb-2 text-center">
              Team: {team}
            </h3>
            </div>
            <p className="text-sm text-cWhite mb-2 text-left">Role: {role}</p>
            <p className="text-sm text-cWhite text-left">
              Affiliation: {affiliation}
            </p>
          </div>
        )}

        <div className="flex flex-col items-center my-auto">
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
          )}

          {twitterLink && (
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-10 h-10" />
            </a>
          )}

          {emailText && (
            <a
              href={`mailto:${emailText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/email.svg" alt="Email" className="w-10 h-10" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
