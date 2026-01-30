import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalf  } from "@fortawesome/free-solid-svg-icons"

type RatingProps = {
  proficiency: number;
  max?: number;
}

const Rating = ({ proficiency, max = 5 }: RatingProps) => {
  const stars: React.ReactNode[] = []
  for (let i = 1; i <= max; i++) {
    if (proficiency >= i) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />)
    }
    else if (proficiency >= i - 0.5) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} className="text-yellow-400" />)
    }
    else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />)
    }
  }

  return (
    <div className="flex gap-1">
      {stars}
    </div>
  )
}

export default Rating
