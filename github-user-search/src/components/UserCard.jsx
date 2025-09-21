function UserCard({ user }) {
  return (
    <div className="p-4 border rounded shadow flex flex-col items-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        width="100"
        className="rounded-full"
      />
      <h2 className="mt-2 font-semibold">
        {user.name ? user.name : user.login}
      </h2>
      {user.location && (
        <p className="text-sm text-gray-600">{user.location}</p>
      )}
      {user.public_repos !== undefined && (
        <p className="text-sm text-gray-600">Repos: {user.public_repos}</p>
      )}
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-2 text-blue-500 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
