import { TeamMember } from "@/components";
import { client } from "@/lib/client";
import React from "react";

const Team = ({ members }) => {
  return (
    <>
      <div className="team-container">
        <h1>Meet the Team</h1>
        <p>__</p>
      </div>
      <div className="teams-container">
        {members?.map((member) => (
          <TeamMember member={member} key={member._id} />
        ))}
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "member"]';
  const members = await client.fetch(query);

  return {
    props: { members },
  };
};

export default Team;
