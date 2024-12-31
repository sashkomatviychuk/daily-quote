import { NextRequest } from 'next/server';

interface Params {
  id: string;
}

export async function GET(_: Request | NextRequest, { params }: { params: Promise<Params> }) {
  const data: Partial<Params> = {};

  const p = await params;

  data.id = p.id;

  return Response.json(data);
}
