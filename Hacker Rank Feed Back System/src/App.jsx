import React from "react";
import { useState } from "react";

const FeedbackSystem = () => {
  const aspects = [
    "Readability",
    "Performance",
    "Security",
    "Documentation",
    "Testing",
  ];
  const [votes, setVotes] = useState([
    { upvotes: 0, downvotes: 0 },
    { upvotes: 0, downvotes: 0 },
    { upvotes: 0, downvotes: 0 },
    { upvotes: 0, downvotes: 0 },
    { upvotes: 0, downvotes: 0 },
  ]);

  const handleupvote = (index) => {
    const updateVoes = [...votes];
    updateVoes[index].upvotes++;
    setVotes(updateVoes);
  };
  const handleDownvote = (index) => {
    const updateVoes = [...votes];
    updateVoes[index].downvotes++;
    setVotes(updateVoes);
  };

  return (
    <div className="flex wrap justify-content-center mt-30 gap-30">
      {aspects.map((aspect, index) => {
        return (
          <div key={index} className="pa-10 w-300 card">
            <h2>{aspect}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                onClick={() => handleupvote(index)}
                className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
              >
                👍 Upvote
              </button>
              <button
                onClick={() => handleDownvote(index)}
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{votes[index].upvotes}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{votes[index].downvotes}</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackSystem;
