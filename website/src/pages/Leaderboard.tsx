import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import '../App.css'
import data from '../data.json'
import BackendService from '../services/backend-service'
import scenarioName from '../config/scenarioName'

type Data = typeof data
type SortKeys = keyof Data[0]
type SortOrder = 'ascending' | 'descending'

const Leaderboard = () => {
  const headers: { key: SortKeys; label: string }[] = [
    { key: 'nickname', label: 'Nickname' },
    { key: 'score', label: 'Score' },
    { key: 'numberOfQuestions', label: 'Total Questions' },
    { key: 'numberOfAnsweredQuestions', label: 'Number Answered' },
    { key: 'correctAnswers', label: 'Correct Answers' },
    { key: 'wrongAnswers', label: 'Wrong Answers' },
    { key: 'hintsUsed', label: 'Hints Used' },
    { key: 'fiftyFiftyUsed', label: '50/50s Used' },
  ]

  const [results, setResults] = useState('');
  const callBackend = async () => {
    console.log(scenarioName.scenario)
      const results = await BackendService.getResults(scenarioName.scenario);
      console.log(results)
      setResults(results.data)
  }

  useEffect(() => {    
    callBackend();
}, []);


  const [sortKey, setSortKey] = useState<SortKeys>('score')
  const [sortOrder, setSortOrder] = useState<SortOrder>('descending')
  const sortedData = useCallback(
    () =>
      sortData({
        tableData: data,
        sortKey,
        reverse: sortOrder === 'descending',
      }),
    [data, sortKey, sortOrder]
  )

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending')
    setSortKey(key)
  }

  function sortData({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Data
    sortKey: SortKeys
    reverse: boolean
  }) {
    if (!sortKey) return tableData
    const sortedData = data.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1
    })

    if (reverse) {
      return sortedData.reverse()
    }
    return sortedData
  }

  function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder
    columnKey: SortKeys
    sortKey: SortKeys
    onClick: MouseEventHandler<HTMLButtonElement>
  }) {
    return (
      <button
        onClick={onClick}
        className={`${
          sortKey === columnKey && sortOrder === 'ascending'
            ? 'sort-button sort-reverse'
            : 'sort-button'
        }`}
      >
        v
      </button>
    )
  }

  function sqlButton(){
    scenarioName.scenario="SQL Injection"
    callBackend()    
  }

  function ddosButton(){
    scenarioName.scenario="Distributed Denial of Service"
    callBackend()    
    
  }

  function xssButton(){
    scenarioName.scenario="Cross Site Scripting"
    callBackend()   
    
  }

  function boButton(){
    scenarioName.scenario="Buffer Overflow"
    callBackend()    
    
  }

  return (
    <div className="background" data-testid={'app-wrapper'}>
      <div>
        <h2>Leaderboard</h2>
        <button onClick={sqlButton}>SQL Injection</button>
        <button onClick={ddosButton}>DDoS</button>
        <button onClick={xssButton}>Cross Site Scripting</button>
        <button onClick={boButton}>Buffer Overflow</button>
        <table>
          <thead>
            <tr>
              {headers.map((row) => {
                return (
                  <td key={row.key}>
                    {row.label}
                    <SortButton
                      columnKey={row.key}
                      onClick={() => changeSort(row.key)}
                      sortOrder={sortOrder}
                      sortKey={sortKey}
                    />
                  </td>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sortedData().map((user: any) => {
              return (
                <tr key={user.score}>
                  <td>{user.nickname}</td>
                  <td>{user.score}</td>
                  <td>{user.numberOfQuestions}</td>
                  <td>{user.numberOfAnsweredQuestions}</td>
                  <td>{user.correctAnswers}</td>
                  <td>{user.wrongAnswers}</td>
                  <td>{user.hintsUsed}</td>
                  <td>{user.fiftyFiftyUsed}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Leaderboard
