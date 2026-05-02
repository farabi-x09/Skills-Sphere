// 'use client';
// import { authClient } from "@/lib/auth-client";
// import { Avatar } from "@heroui/react";

// const ProfileCard = () => {
//     const userData = authClient.useSession();
//       const user = userData.data?.user;
//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border my-10">
      
//       {/* Top Section */}
//       <div className="flex items-center justify-between border-b pb-4">
//         <div className="flex items-center gap-4">
//           <Avatar className="w-15 h-15">
//                   <Avatar.Image src={user?.image || ""} alt={user?.name || "User Avatar"} />
//                   <Avatar.Fallback>{user?.name ? user.name.charAt(0) : "U"}</Avatar.Fallback>
//                 </Avatar>
//           <div>
//             <h2 className="text-xl font-semibold">{user?.name || "Alex Johnson"}</h2>
//             <p className="text-gray-500 text-sm">
//               {user?.email || "alex.johnson@example.com"}
//             </p>
//             <p className="text-gray-400 text-xs">
//               Member since Jan 2025
//             </p>
//           </div>
//         </div>

//         <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
//           Update Profile
//         </button>
//       </div>

//       {/* Info Section */}
//       <div className="mt-6 space-y-4">
//         <div className="flex justify-between">
//           <span className="text-gray-500">Full Name</span>
//           <span className="font-medium">{user?.name || "Alex Johnson"}</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-gray-500">Email</span>
//           <span className="font-medium">
//             {user?.email || "alex.johnson@example.com"}
//           </span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-gray-500">Photo URL</span>
//           <span className="font-medium text-blue-500 truncate max-w-[200px]">
//             {user?.image || "https://example.com/photo.jpg"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;


'use client';
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";

const ProfileCard = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-4 sm:p-6 border my-6 sm:my-10">
      
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-4">
        
        {/* Left */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
            <Avatar.Image src={user?.image || ""} alt={user?.name || "User Avatar"} />
            <Avatar.Fallback>
              {user?.name ? user.name.charAt(0) : "U"}
            </Avatar.Fallback>
          </Avatar>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold">
              {user?.name || "Alex Johnson"}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm break-all">
              {user?.email || "alex.johnson@example.com"}
            </p>
            <p className="text-gray-400 text-xs">
              Member since Jan 2025
            </p>
          </div>
        </div>

        {/* Button */}
        <Link href={"/profileupdate"} className="w-full sm:w-auto">
        <button className="w-full sm:w-auto px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition">
          Update Profile
        </button>
        </Link> 
      </div>

      {/* Info Section */}
      <div className="mt-6 space-y-4">
        
        {/* Item */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <span className="text-gray-500 text-sm">Full Name</span>
          <span className="font-medium text-sm sm:text-base">
            {user?.name || "Alex Johnson"}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <span className="text-gray-500 text-sm">Email</span>
          <span className="font-medium text-sm sm:text-base break-all">
            {user?.email || "alex.johnson@example.com"}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <span className="text-gray-500 text-sm">Photo URL</span>
          <span className="font-medium text-blue-500 text-sm sm:text-base break-all">
            {user?.image || "https://example.com/photo.jpg"}
          </span>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;