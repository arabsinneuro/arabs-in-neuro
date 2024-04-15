import React from "react";

const MemberCard = ({
  name,
  role,
  team,
  affiliation,
  affiliationTitle,
  image,
  linkedinLink,
  twitterLink,
  emailText,
}) => {
  const backgroundColorClass = image ? "bg-cN600" : "bg-cPink";
  const width = image ? "w-64" : "w-80";
  const height = "h-96";

  return (
    <div
      className={`${backgroundColorClass} rounded-2xl p-2 flex flex-col items-center ${width} ${height}`}
    >
      <div className="w-full flex items-center rounded-2xl justify-center bg-cN400 h-64">
        {image && (
          <img src={image} alt={name} className="w-auto rounded-2xl h-64" />
        )}
      </div>

      <div className="flex w-full py-3 h-42">
        {!image && (
          <div className="flex-grow flex flex-col items-center justify-center w-full">
            <h2 className="text-lg font-bold text-cWhite mb-2 mx-auto">
              {name}
            </h2>
            <p className="text-md font-bold text-cWhite mb-2 mx-auto">{role}</p>
            <h3 className="text-md italic text-cWhite mb-2 text-center">
              {affiliationTitle}
            </h3>
            <p className="text-md text-cWhite">{affiliation}</p>
          </div>
        )}

        {image && (
          <div className="flex-grow flex flex-col justify-between w-56 h-auto">
            <div>
              <h2 className="text-md font-extrabold text-cWhite text-center mx-auto">
                {name}
              </h2>
              <h3 className="text-md fond-extrabold italic text-cWhite text-center">
                {team}
              </h3>
            </div>

            <div className="justify-end pb-3">
              <p className="text-xs text-cWhite text-center mx-auto">{affiliation}</p>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center h-auto mx-2">
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-10 h-auto"
              />
            </a>
          )}

          {twitterLink && (
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/twitter.svg"
                alt="Twitter"
                className="w-10 h-auto"
              />
            </a>
          )}

          {emailText && (
            <a
              href={`mailto:${emailText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/email.svg" alt="Email" className="w-10 h-auto" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
