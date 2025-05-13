This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Set your .env file.
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y3Jpc...
CLERK_SECRET_KEY=sk_test_HOyUMSX...
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/admin
NEXT_PUBLIC_BASE_URL=http://localhost:3000

### You have to create an account in Clerk, or just comment out 
```typescript
//app/page.tsx
 <SignedIn>
  <UserButton />
</SignedIn>

//api/*/routes.ts
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
```
