function Options() {
  return (
    <div className="options">
      {currentQuestion.options.map(option =>
        <button key={option} className="btn btn-option">{option}</button>
      )}
    </div>
  )
}

export default Options
