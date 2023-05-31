const User = ({ user }) => {
  return (
    <span className="user">
      <span className="name">{user}</span>
      <span className="handle">{user}</span>
    </span>
  );
};

export default User;
