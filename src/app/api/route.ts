// import { type NextRequest } from 'next/server';

export async function GET(/*request: NextRequest*/) {
  const response = await fetch('https://pokeapi.co/api/v2/ability/7/');
  const data = await response.json();

  return Response.json(data);
}
