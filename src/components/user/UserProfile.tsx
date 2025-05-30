type UserProfileProps = {
  
  userName: string;
}

const UserProfile = ({userName}: UserProfileProps) => {
  return (
    <h1 className="text-2xl font-bold">
      User Profile: {userName}

    </h1>
  )
}

export default UserProfile