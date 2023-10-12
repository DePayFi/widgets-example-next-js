import DePayWidgets from "@depay/widgets"

export default function DePayWidgetsButton(props) {

  return(
    <button
      onClick={()=>{
        DePayWidgets.Payment({
          integration: props.integration,
          payload: props.payload,
        })
      }}
    >
      PAY
    </button>
  )
}
