import React from 'react'
import '../App.css'

const Leaderboard = () => {
    return(
        <div className='App'>
            <div className="auth-form-container">
                <h2>Leaderboard</h2>
                <button className='home-btn'>SQL</button>
                <button className='home-btn'>DDoS</button>
                <button className='home-btn'>XSS</button>
                <button className='home-btn'>BO</button>
            </div>
        </div>       
    )
}
export default Leaderboard