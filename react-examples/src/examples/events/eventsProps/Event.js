// Passando eventos por props.

const Event = props => <button onClick={props.event}>{props.text}</button>
 
export default Event;