// import React from 'react';

// const loading = () => {
//     return (
//         <div className='flex h-[85vh] items-center justify-center'>
//             loading...
//             <span className="loading loading-dots loading-xl"></span>
//         </div>
//     );
// };

// export default loading;
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base-200/80 backdrop-blur-sm gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <span className="text-lg font-semibold tracking-wide text-neutral-content">
        Loading...
      </span>
    </div>
  );
}