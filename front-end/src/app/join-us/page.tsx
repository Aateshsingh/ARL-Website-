import React from "react";
import Form from "@/components/Form";
function page() {
  return (
    <div className="relative">
      <div className="h-[calc(100vh-64px)] overflow-y-auto scroll-smooth">
        <Form />
      </div>
    </div>
  );
}

export default page;
