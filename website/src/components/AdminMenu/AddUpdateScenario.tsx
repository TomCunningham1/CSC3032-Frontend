import './admin.css'

const AddUpdateInstructions = () => {
  return (
    <div className="admin-instructions">
      <h4>Instructions</h4>
      <ul>
        <li>
          Use the text box below to enter the questions for a playthrough eg.
          SQL Injection
        </li>
        <li>
          Using the title of an existing playthrough will update its questions.
        </li>
        <li>
          The expected format is outlined below, update the JSON with the new
          values
        </li>
      </ul>
    </div>
  )
}
const AddUpdateScenario = () => {
  let value =
    '{\n\t"title":""\n\t"questions":[\n\t\t{\n\t\t\t"question":"",\n\t\t\t"optionA":"",\n\t\t\t"optionB":"",\n\t\t\t"optionC":"",\n\t\t\t"optionD":"",\n\t\t\t"answer":"",\n\t\t},\n\t\t{\n\t\t\t"question":"",\n\t\t\t"optionA":"",\n\t\t\t"optionB":"",\n\t\t\t"optionC":"",\n\t\t\t"optionD":"",\n\t\t\t"answer":"",\n\t\t}\n\t]\n}'

  return (
    <div className="scenario-wrapper">
      <div className="scenario-container">
        <AddUpdateInstructions />

        <textarea
          className={'admin-scenario-edit-box'}
          cols={12}
          rows={24}
          defaultValue={value}
        ></textarea>
      </div>
    </div>
  )
}

export default AddUpdateScenario
