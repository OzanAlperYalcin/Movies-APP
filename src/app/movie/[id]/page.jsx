import { fetchSingleMovie } from "@/services/movie";
import DetailsContainer from "@/containers/movie";

export default async function Movie({ params }) {

    const movie = await fetchSingleMovie(params.id)

    return (
        <DetailsContainer movie={movie} />
    )
}