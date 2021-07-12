import React, {useState} from 'react'

function ConfirmationDetails() {

    const [reason, setReason] = useState("")

    return (
        <form>
        <div>
          <button >‹ Back</button>
          <h1>Confirm Details</h1>
          {/* <p>Mentor: {data.mentor.name}</p> */}
          {/* <p>
            Selected time slot: {format(selectedSlot, "PPPPp", { locale })}{" "}
            for 1 hour
          </p> */}
          <p>
            <label>Reason:</label>
            <br />
            <textarea
              onChange={(event) => setReason(event.target.value)}
              required
              value={reason}
            ></textarea>
          </p>
          <p>
            <button>
              Book appointment
            </button>
          </p>
        </div>
      </form>
        
    )
}

export default ConfirmationDetails
