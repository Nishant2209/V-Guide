import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Need Some Help?</h1>
      <span className="mailDesc">You can send your query</span>
      <div className="mailInputContainer">
        <div>
          <input type="type" placeholder="Explain your issue?" />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default MailList