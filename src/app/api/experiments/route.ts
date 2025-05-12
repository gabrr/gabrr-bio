import { NextResponse, NextRequest } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import { experimentStore } from '../../lib/experimentsStore';
import { ABExperiment } from '../../models/experimentsModel';
import { ABExperimentSchema } from '../../validators/experimentsValidation';
import { z } from 'zod';

const PatchSchema = z.object({
  experimentId: z.string().nonempty(),
  variantKey: z.enum(['A', 'B']),
  action: z.enum(['view', 'click']),
});

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const experiments = experimentStore.getAll(userId);
  return NextResponse.json(experiments);
}

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const parseResult = ABExperimentSchema.safeParse(body);

  if (!parseResult.success) {
    return NextResponse.json(
      { error: 'Invalid experiment', details: parseResult.error.errors },
      { status: 400 }
    );
  }

  try {
    experimentStore.add(userId, body as ABExperiment);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const parseResult = PatchSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      { error: 'Invalid patch request', details: parseResult.error.errors },
      { status: 400 }
    );
  }

  const { experimentId, variantKey, action } = body;

  if (!experimentId || !variantKey || !['A', 'B'].includes(variantKey)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  let result = false;

  if (action === 'view') {
    result = experimentStore.recordView(userId, experimentId, variantKey);
  } else if (action === 'click') {
    result = experimentStore.recordClick(userId, experimentId, variantKey);
  } else {
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  }

  if (!result) {
    return NextResponse.json({ error: 'Experiment or variant not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
