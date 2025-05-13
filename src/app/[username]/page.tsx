export default async function UserProfilePage({ params }: { params: Promise<any> }) {
  const { username } = await params;

  return <div>User Profile Page for {username}</div>;
}
