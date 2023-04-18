import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {cardDetails} = props
  const {name, teamImageUrl, id} = cardDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list">
        <img src={teamImageUrl} alt={`${name}`} className="image" />
        <p className="para">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
