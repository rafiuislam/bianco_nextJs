"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1055942685771723" chatSupport>
      <CustomChat
        pageId="103302306108226"
        minimized={true}
        className="bg-primary"
      />
    </FacebookProvider>
  );
};

export default FacebookMsg;
