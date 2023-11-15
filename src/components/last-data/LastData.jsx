import './LastData.css'

function LastData({data}) {
  // console.log(data)
  const { tipoBoletim, dataHoraCotacao } = data
  const date = new Date(dataHoraCotacao).toLocaleString()
  return (
    <div className="info text-xs my-2 px-4 flex-start">
      Os dados dessa página foram gerados em {date} no boletim tipo {tipoBoletim}.
    </div>
  )
}

export default LastData