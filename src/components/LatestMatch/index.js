import './index.css'

const LatestMatch = props => {
  const {latesMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latesMatchDetails
  return (
    <div className="latest">
      <p className="para">Latest Matches</p>
      <div className="borderbg">
        <div>
          <p className="heading">{umpires}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{competingTeam}</p>
          <p>{matchStatus}</p>
        </div>

        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="imglogo"
        />

        <div>
          <h1 className="heading">First Innings</h1>
          <p className="para">{firstInnings}</p>

          <h1 className="heading">Second Innings</h1>
          <p>{secondInnings}</p>

          <h1 className="heading">Man Of The Match</h1>
          <p>{manOfTheMatch}</p>

          <h1 className="heading">umpires</h1>
          <p>{umpires}</p>
          <p>{result}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
