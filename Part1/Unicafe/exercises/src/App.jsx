import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Statistics</th>
          </tr>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={(good - bad) / total} />
          <StatisticLine text="Positive" value={((good / total) * 100).toFixed(1) + " %"} />
        </tbody>
      </table>
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App