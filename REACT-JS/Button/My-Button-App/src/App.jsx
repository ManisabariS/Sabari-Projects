import './App.css'


function App() {
  

  return (
    <>
      <ButtonComponent size="sm" variant="primary" values ="Create" style="btn"/>
      <ButtonComponent size="md" variant="warning" values ="Read" style="btn"/>
      <ButtonComponent size="lg" variant="success" values ="Update" style="btn"/>
      <ButtonComponent size="xl" variant="danger" values ="Delete"style="btn"/>
      

    </>
  )
}

export default App

function ButtonComponent(props)
{

  return(
    <>
     <button className={`${props.size} ${props.variant} ${props.style}`} >{props.values}</button>
    </>
  )
}
