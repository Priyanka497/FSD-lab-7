import { useState } from 'react'

export default function App() {
  const [number, setNumber] = useState('')
  const [fact, setFact] = useState('')

  const getFact = () => {
    const funFacts = {
      1: "The number 1 symbolizes unity and leadership.",
      2: "2 is the only even prime number.",
      3: "A triangle has 3 sides.",
      4: "A square has 4 equal sides.",
      5: "Humans have 5 fingers on each hand.",
      6: "A cube has 6 faces.",
      7: "There are 7 days in a week.",
      8: "An octagon has 8 sides.",
      9: "A cat is said to have 9 lives.",
      10: "Our number system is based on 10 digits."
    }

    if (!number || number < 1 || number > 10) {
      alert("Enter a number between 1 and 10")
      return
    }

    setFact(funFacts[number])
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Fun Number Fact 🎯</h1>

      <input
        type="number"
        placeholder="Enter number (1-10)"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      />

      <button onClick={getFact}>Get Fact</button>

      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
        {fact}
      </p>
    </div>
  )
}