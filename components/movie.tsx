"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";
import Link from "next/link";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const OnClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={OnClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
