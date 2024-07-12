import { lastUpdated } from "@/LastUpdate";
import React from "react";

const LastUpdatedComponent = () => {
  return (
    <div>
      <p>Last updated on: {new Date(lastUpdated).toLocaleString()}</p>
    </div>
  );
};

export default LastUpdatedComponent;
