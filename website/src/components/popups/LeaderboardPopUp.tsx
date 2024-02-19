import { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import scenarioName from '../../config/scenarioName'
import PopUp from './PopUp'
import './PopUp.css'
import BackendService from '../../services/backend-service'
import CustomClockLoader from '../LoadingClock/LoadingClock'

const componentId = 'leaderboard-popup'

interface ResultsTypes {
    Username: String
    Score: number
    NumberOfQuestions: number
    NumberOfAnsweredQuestions: number
    CorrectAnswers: number
    WrongAnswers: number
    HintsUsed: number
    FiftyFiftyUsed: number
  }
  
const LeaderboardPopUp = ({ open, onClose }: any) => {

    const [top10, setTop10] = useState([])
    const [loading, isLoading] = useState(true)
  
    const callBackend = async () => {
      isLoading(true)
      const allResults = await BackendService.getResults(scenarioName.scenario)
      setTop10(allResults.data.slice(0, 10))
      isLoading(false)
    }
  
    useEffect(() => {
      callBackend()
    }, [])
  
    type SortKeys = keyof ResultsTypes
    type SortOrder = 'ascending' | 'descending'
  
    const headers: { key: SortKeys; label: string }[] = [
      { key: 'Username', label: 'Nickname' },
      { key: 'Score', label: 'Score' },
      { key: 'NumberOfQuestions', label: 'Total Questions' },
      { key: 'NumberOfAnsweredQuestions', label: 'Number Answered' },
      { key: 'CorrectAnswers', label: 'Correct Answers' },
      { key: 'WrongAnswers', label: 'Wrong Answers' },
      { key: 'HintsUsed', label: 'Hints Used' },
      { key: 'FiftyFiftyUsed', label: '50/50s Used' },
    ]
  
    const [sortKey, setSortKey] = useState<SortKeys>('Score')
    const [sortOrder, setSortOrder] = useState<SortOrder>('descending')
    const sortedData = useCallback(
      () =>
        sortData({
          tableData: top10,
          sortKey,
          reverse: sortOrder === 'descending',
        }),
      [top10, sortKey, sortOrder]
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
      tableData: ResultsTypes[]
      sortKey: SortKeys
      reverse: boolean
    }) {
      if (!sortKey) return tableData
      const sortedData = top10.sort((a, b) => {
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
  
    function sqlButton() {
      scenarioName.scenario = 'SQL Injection'
      callBackend()
    }
  
    function ddosButton() {
      scenarioName.scenario = 'Distributed Denial of Service'
      callBackend()
    }
  
    function xssButton() {
      scenarioName.scenario = 'Cross Site Scripting'
      callBackend()
    }
  
    function boButton() {
      scenarioName.scenario = 'Buffer Overflow'
      callBackend()
    }

  if (!open) return null
  return loading ? (
    <CustomClockLoader />
  ) : ( 
    <PopUp id={componentId} title={'Leaderboard'} name="menu-container-solid Leaderboard" onClose={onClose}>
        <div data-testid="leaderboard-popup-text" className="PopUpTextLeaderboard">
          <div>
            <button className="scenario-button" onClick={sqlButton}>
              SQL Injection
            </button>
            <button className="scenario-button" onClick={ddosButton}>
              Distributed Denial of Service
            </button>
            <button className="scenario-button" onClick={xssButton}>
              Cross Site Scripting
            </button>
            <button className="scenario-button" onClick={boButton}>
              Buffer Overflow
            </button>
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
                    <td>{user.Username}</td>
                    <td>{user.Score}</td>
                    <td>{user.NumberOfQuestions}</td>
                    <td>{user.NumberOfAnsweredQuestions}</td>
                    <td>{user.CorrectAnswers}</td>
                    <td>{user.WrongAnswers}</td>
                    <td>{user.HintsUsed}</td>
                    <td>{user.FiftyFiftyUsed}</td>
                  </tr>
                )
              })}
            </tbody>
            </table>
          </div>  
        </div> 
      </PopUp> 
    
  )
}

export default LeaderboardPopUp