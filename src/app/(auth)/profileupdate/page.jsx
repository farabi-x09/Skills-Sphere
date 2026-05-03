

'use client';
import { useState, useEffect } from "react";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user?.name );
      setPhoto(user?.image);
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name,
        image: photo,
      });

      toast.success("Profile updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        
        {/* Header */}
        <Link href="/profile" className="flex items-center gap-2 text-blue-500 mb-6">
          <ArrowLeft size={24} />
          <span className="text-lg font-medium">Back</span>
        </Link>

        <p className="text-gray-500 text-sm mb-6 text-center">
          Update your name and profile picture.
        </p>

     
        <div className="flex flex-col items-center gap-3 mb-6">
          <Avatar className="w-16 h-16">
            <Avatar.Image src={photo || ""} />
            <Avatar.Fallback>
              {name ? name.charAt(0) : "U"}
            </Avatar.Fallback>
          </Avatar>

          <h2 className="text-lg font-semibold">
            {name || "Your Name"}
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-4">
          
          {/* Photo URL */}
          <div>
            <label className="text-sm text-gray-600">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Photo URL"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;