import './ChartBar.css'

const ChartBar=(props)=>{
    let heightpercent='0%'
    
    if(props.maxValue>0){
        heightpercent=Math.round((props.value/props.maxValue)*100)+'%'
    }
    console.log(heightpercent)
    return (
        <div className='chart-bar'>
          <div className='chart-bar__inner'>
            <div
              className='chart-bar__fill'
              style={{ height: heightpercent}}
            ></div>
          </div>
          <div className='chart-bar__label'>{props.id}</div>
        </div>
      );
}

export default ChartBar