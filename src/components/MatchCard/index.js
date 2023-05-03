import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  return (
    <li className="list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p className="name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
