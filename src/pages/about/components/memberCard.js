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
  const width = image ? "w-64" : "w-80";
  const height = "h-96";

  return (
    <div
      className={`${backgroundColorClass} rounded-2xl p-2 flex flex-col items-center ${width} ${height}`}
    >
      <div className="w-full flex items-center rounded-2xl justify-center bg-cN400">
        {image && (
          <img src={image} alt={name} className="w-auto h-52 rounded-2xl" />
        )}
      </div>

      <div className="flex w-full py-3">
        {!team && (
          <div className="flex-grow flex flex-col items-center justify-center w-full">
            <h2 className="text-lg font-bold text-cWhite mb-2 mx-auto">
              {name}
            </h2>
            <p className="text-sm font-bold text-cWhite mb-2 mx-auto">{role}</p>
            <h3 className="text-sm italic text-cWhite mb-2 text-center">
              Affiliation:
            </h3>
            <p className="text-sm text-cWhite">{affiliation}</p>
          </div>
        )}

        {team && (
          <div className="flex-grow flex flex-col justify-between w-56">
            <h2 className="text-xl font-extrabold text-cWhite text-center  mx-auto">
              {name}
            </h2>

            <div className="justify-end">
              <h3 className="text-sm fond-extrabold italic text-cGreen mb-2 text-center">
                {team}
              </h3>
              <p className="text-xs text-cWhite text-left">{affiliation}</p>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center">
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
              <img
                src="/icons/twitter.svg"
                alt="Twitter"
                className="w-10 h-10"
              />
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
