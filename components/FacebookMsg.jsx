import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1055942685771723" chatSupport>
      <CustomChat pageId="103302306108226" minimized={"true"} />
    </FacebookProvider>
  );
};

export default FacebookMsg;

{
  /* <div className="fb-customerchat"
 page_id="<ENTER-YOUR-FACEBOOK-ID-HERE>"
 minimized="false">
</div> */
}
