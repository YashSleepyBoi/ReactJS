import ChartBar from './ChartBar'

import './Chart.css'

const Chart=(props)=>{
    const valueFinder=props.datapoints.map(data=>data.value)
    
    let maxDatapoint=0

    for(let i of valueFinder){
        console.log(i)
        maxDatapoint+=i
    }
    
    return(
        <div className='chart'>
        {props.datapoints.map((datapoint)=>{
            return <ChartBar key={datapoint.label} id={datapoint.label} value={datapoint.value} maxValue={maxDatapoint}/>
        })}
        </div>
    )
    
}
export default Chart