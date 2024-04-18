import React from "react";
import config from "../../config/config.json";
import "./VoteInfo.styles.css";

const VoteInformationSection = () => {
  return (
    <div>
      <div className="vote-info">
        <p>
          {config.vote.body}
        </p>
      </div>
      <div className="vote-subsection">
        <h3>
          {config.vote.voteInfo}
        </h3>
      </div>
    </div>
  );
};

export default VoteInformationSection;
