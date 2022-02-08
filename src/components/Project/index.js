import React from "react";
import "./style.css";

function Project({
  liveApp,
  githubApp,
  title,
  image,
  classy,
  info,
  challenges,
  triumphs,
  dependancies,
  video,
  openModal,
}) {
  return (
    <>
      <button
        style={{ backgroundImage: image }}
        className={classy}
        onClick={() =>
          openModal(
            liveApp,
            githubApp,
            title,
            image,
            info,
            challenges,
            triumphs,
            dependancies,
            video,
            openModal
          )
        }
      >
        <p>{title}</p>
      </button>
    </>
  );
}

export default Project;
