import { type NextApiRequest } from 'next';

interface Params {
  id: string;
}

export async function GET(_: NextApiRequest, { params }: { params: Promise<Params> }) {
  const data: Partial<Params> = {};
  const p = await params;

  data.id = p.id;

  return Response.json(data);
}
