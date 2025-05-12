import { themeStore } from '@/app/lib/themeStore';
import { getAuth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const themes = themeStore.getAllThemes();
  const userTheme = themeStore.getUserTheme(userId);
  return NextResponse.json({ themes, userTheme });
}

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { themeId } = await req.json();
  const success = themeStore.setUserTheme(userId, themeId);
  if (!success) return NextResponse.json({ error: 'Theme not found' }, { status: 404 });

  return NextResponse.json({ message: 'Theme updated successfully' });
}
