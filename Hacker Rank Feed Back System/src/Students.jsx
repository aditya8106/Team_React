import React from "react";
import { useState } from "react";

const Students = () => {
  const students = ["Aditya", "Rahul", "Priya", "Anjali", "Rohit"];
  const [attendence, setVotes] = useState(
    students.map(() => ({ presents: 0, Absents: 0 }))
  );

  const handlepresents = (index) => {
    const updateattendence = [...attendence];
    updateattendence[index].presents++;
    setVotes(updateattendence);
  };
  const handleDownvote = (index) => {
    const updateVoes = [...attendence];
    updateVoes[index].Absents++;
    setVotes(updateVoes);
  };

  return (
    <div className="flex wrap justify-content-center mt-30 gap-30">
      {students.map((aspect, index) => {
        return (
          <div key={index} className="pa-10 w-300 card">
            <h2>{aspect}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                onClick={() => handlepresents(index)}
                className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
              >
                👍 Present
              </button>
              <button
                onClick={() => handleDownvote(index)}
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
              >
                👎 Absent
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              presents: <strong>{attendence[index].presents}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
              Absents: <strong>{attendence[index].Absents}</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Students;
