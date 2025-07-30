import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <div>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {good + neutral + bad}</p>
        <p>Average: {(good - bad) / (good + neutral + bad || 1)}</p>
        <p>Positive: {((good / (good + neutral + bad || 1)) * 100)} %</p>
      </div>
    </div>
  )
}

export default App