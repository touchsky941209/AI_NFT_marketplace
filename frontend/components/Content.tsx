import React, { ReactNode } from 'react';
type ContentProps = {
  children: ReactNode;
};
const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div
      id="content"
      className="col-span-12 sm:col-span-9 lg:col-span-10 h-[calc(100vh-8.75em)] overflow-y-auto"
    >
      <div className="w-full h-full bg-neutral-900 rounded-xl">
        {children}
      </div>
    </div>
  );
};
export default Content;
