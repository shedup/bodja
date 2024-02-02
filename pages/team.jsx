import { TeamMember } from "@/components";
import { client } from "@/lib/client";
import React from "react";

const Team = ({ members }) => {
  return (
    <>
      <div className="team-container">
        <h1>Team Members</h1>
      </div>
      <div className="items-container">
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
  console.log("HERE", members);

  return {
    props: { members },
  };
};

export default Team;
