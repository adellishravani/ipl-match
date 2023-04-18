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
    <div>
      <p className="para">Latest Matches</p>
      <div className="borderbg">
        <div>
          <h1>{umpires}</h1>
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
          <h1>First Innings</h1>
          <p>{firstInnings}</p>

          <h1>Second Innings</h1>
          <p>{secondInnings}</p>

          <h1>Man Of The Match</h1>
          <p>{manOfTheMatch}</p>

          <h1>umpires</h1>
          <p>{umpires}</p>
          <p>{result}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
