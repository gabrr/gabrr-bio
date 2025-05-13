import { auth } from '@clerk/nextjs/server';

export default async function httpClient(path: string, options: RequestInit = {}) {
  const clerkAuth = await auth();
  const token = await clerkAuth.getToken();

  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  }).then((response) => response.json());
}
