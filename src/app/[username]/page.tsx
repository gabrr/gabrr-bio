export default function UserProfilePage({ params }: { params: { username: string } }) {
  return <div>User Profile Page for {params.username}</div>;
}
