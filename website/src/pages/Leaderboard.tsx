import React, { MouseEventHandler, useCallback, useState } from 'react'
import '../App.css'
import data from '../data.json'

type Data = typeof data
type SortKeys = keyof Data[0]
type SortOrder = 'ascending' | 'descending'

const Leaderboard = () => {

        const headers: {key: SortKeys, label: string}[] = [
        {key: "nickname", label: "Nickname"},
        {key: "score", label: "Score"},
        {key: "timeTaken", label: "Time (seconds)"},
        {key: "scenario", label: "Scenario"}
    ]
    const [sortKey, setSortKey] = useState<SortKeys>("score")
    const [sortOrder, setSortOrder] = useState<SortOrder>("descending")
    const sortedData = useCallback(() => sortData({tableData: data, sortKey, reverse: sortOrder === 'descending'}), [data, sortKey, sortOrder])

    function changeSort(key: SortKeys){
        setSortOrder(sortOrder === "ascending" ? "descending": "ascending")
        setSortKey(key)
    }

    function sortData({tableData, sortKey, reverse}:{
        tableData: Data,
        sortKey: SortKeys,
        reverse: boolean
    }){
        if(!sortKey) return tableData
        const sortedData = data.sort((a, b) =>{
            return a[sortKey]>b[sortKey] ? 1 : -1
        })

        if(reverse){
            return sortedData.reverse()
        }
        return sortedData
    }

    function SortButton({sortOrder, columnKey, sortKey, onClick}:
    {
            sortOrder: SortOrder
            columnKey: SortKeys
            sortKey: SortKeys
            onClick: MouseEventHandler<HTMLButtonElement>
    }){
        return <button onClick={onClick} className={`${sortKey === columnKey && sortOrder === 'ascending' ? "sort-button sort-reverse" : "sort-button"}`}>v</button>
    }
    
    return(
        <div className="background"  data-testid={"app-wrapper"}>
            <div>
                <h2>Leaderboard</h2>
                <table>
                    <thead>
                        <tr>
                            {headers.map((row) => {
                                return (
                                <td key={row.key}>{row.label}
                                <SortButton
                                    columnKey={row.key}
                                    onClick={() => changeSort(row.key)}
                                    sortOrder={sortOrder}
                                    sortKey={sortKey}
                                />
                                </td>
                            )})}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData().map((user:any)=> {
                            return (
                                <tr key={user.score}>
                                    <td>{user.nickname}</td>
                                    <td>{user.score}</td>
                                    <td>{user.timeTaken}</td>
                                    <td>{user.scenario}</td>
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