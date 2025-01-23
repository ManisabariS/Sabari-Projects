const Details = (props) => {
  return (
    <div>
      <br />
      <span><b>Name :</b> </span><span>{props.name}</span>
      <br />
      <span><b>Age: </b></span><span>{props.age}</span>
    </div>
  )
}

export default Details
