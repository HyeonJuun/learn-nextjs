import { URL as URL_API } from "../app/(home)/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${URL_API}/${id}`);
  return response.json();
}
export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovie(id);
  return <h6>{JSON.stringify(movieInfo)}</h6>;
}
