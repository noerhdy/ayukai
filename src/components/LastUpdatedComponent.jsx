import React from "react";

const LastUpdatedComponent = () => {
  return (
    <div>
      <p className="text-zinc-400 dark:text-zinc-700 text-[14px]">
        updated {""}
        {new Date(process.env.LAST_COMMIT_DATE).toLocaleString()}
      </p>
    </div>
  );
};

export default LastUpdatedComponent;
