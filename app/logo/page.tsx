import React from "react";

function Logo() {
  return (
    <div className="min-h-screen h-full w-full flex items-center justify-center">
      <div className="w-[25%] mx-auto mt-12 md:mt-0 flex  items-center justify-center">
        <div className="flex flex-col  p-8 border-r-2 border-slate-400">
          <p className="text-6xl border-b-2 border-r-2 border-slate-400">M</p>
          <p className="text-6xl">E</p>
        </div>
        <div className="flex flex-col  p-8">
          <p className="text-6xl border-b-2 border-slate-400">R</p>
          <p className="text-6xl border-l-2 border-slate-400">N</p>
        </div>
      </div>
    </div>
  );
}

export default Logo;
