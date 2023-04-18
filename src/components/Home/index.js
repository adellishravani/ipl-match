import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {cards: [], show: true}

  componentDidMount() {
    this.getCardsData()
  }

  getCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      teamImageUrl: each.team_image_url,
      name: each.name,
    }))

    this.setState({cards: updatedData, show: false})
  }

  render() {
    const {cards, show} = this.state
    return (
      <div className="bg">
        <div className="nav">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="name">IPL Dashboard</h1>
        </div>

        <div className="lists" data-testid="loader">
          {show ? (
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          ) : (
            cards.map(item => <TeamCard cardDetails={item} key={item.id} />)
          )}
        </div>
      </div>
    )
  }
}

export default Home
