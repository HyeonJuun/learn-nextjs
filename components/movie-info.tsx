import styles from "../styles/movie-info.module.css";
import { URL as URL_API } from "../app/(home)/page";

export async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${URL_API}/${id}`);
  return response.json();
}
export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movieInfo.poster_path}
        className={styles.poster}
        alt={movieInfo.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movieInfo.title}</h1>
        <h3>⭐️{movieInfo.vote_average.toFixed(1)}</h3>
        <p>{movieInfo.overview}</p>
        <a href={movieInfo.homepage} target={"_blank"}>
          HomePage &rarr;
        </a>
      </div>
    </div>
  );
}
