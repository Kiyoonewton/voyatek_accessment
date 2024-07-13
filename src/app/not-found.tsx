import React from "react";

const NotFound = () => {
  return (
    <div className=" border-custom-blue border-8 w-[600px] m-auto mt-24 px-10 py-10 rounded">
      <h1 className="text-center font-black text-[72px]">ERROR 404!</h1>
      <h3 className="text-center underline text-2xl">
        The reasons you might be getting this Error
      </h3>
      <ol className="list-decimal">
        <li>Only Settings Page is built navigate to settings on the navbar</li>
        <li>
          Have you added in <span className="text-custom-blue">.env</span> check
          the env sample
        </li>
        <li>
          You might have passed beeceptor Free Api limit wait after 9 hours or
          ask The Tech lead at Voyatek to reset it
        </li>
      </ol>
    </div>
  );
};

export default NotFound;
