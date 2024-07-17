"use client";

import { useUserAuth } from "./_utils/auth-context";

const UserProfile = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const handleFirebaseSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="min-h-screen bg-red-300 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full m-4"
          onClick={handleGitHubSignIn}
        >
          Sign in with GitHub
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full m-4"
          onClick={handleFirebaseSignOut}
        >
          Sign out
        </button>
        <a
          href="../week-10/shopping-list"
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full m-4"
        >
          Open Shopping List
        </a>

        <div className="mt-4">
          {user ? (
            <p className="text-center text-lg text-gray-800">
              Welcome, {user.displayName} ({user.email})
            </p>
          ) : (
            <p className="text-center text-lg text-gray-800">
              Please sign in to view your profile.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
