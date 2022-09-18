import React from 'react'

export default function Alert(props) {
const Capitalize = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

  return (
<div style={{height:"50px"}}>
   { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalize(props.alert.type)} </strong>-<strong> {props.alert.msg}</strong>
  </div>}
</div>
  )
}
