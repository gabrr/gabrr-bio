import { NextResponse, NextRequest } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import LinkValidator, { LinkCard } from '../../validators/linkValidation';
import { linkStore } from '@/app/lib/link/linkStore';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const links = linkStore.getLinks(userId);
  return NextResponse.json(links);
}

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const parseResult = LinkValidator.safeParse(body);

  if (!parseResult.success) {
    return NextResponse.json(
      { error: 'Invalid link', details: parseResult.error.errors },
      { status: 400 }
    );
  }

  try {
    const id = linkStore.addLink(userId, body as LinkCard);
    return NextResponse.json({ id }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const parseResult = LinkValidator.safeParse(body);

  if (!parseResult.success) {
    return NextResponse.json(
      { error: 'Invalid link', details: parseResult.error.errors },
      { status: 400 }
    );
  }

  try {
    const id = linkStore.updateLink(userId, body as LinkCard);
    if (!id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ id });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await req.json();
  const deleted = linkStore.deleteLink(userId, id);

  if (!deleted) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ id });
}
