import Featured from "@/components/featured"

function DetailsContainer({ movie }) {
  return (
    <Featured movie={movie} isTruncate={false}/>

  )
}

export default DetailsContainer