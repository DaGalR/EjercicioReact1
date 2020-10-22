import React from "react";

function RenderField({ fieldInfo }) {
  console.log(fieldInfo);
  return (
    <div>
      <label htmlFor={fieldInfo.name}>{fieldInfo.name}:</label>
      <input
        type={fieldInfo.type}
        name={fieldInfo.name}
        placeholder={fieldInfo.placeholder}
        id={fieldInfo.id}
      />
    </div>
  );
}
const handleSumbit = (evt) => {
  evt.preventDefault();
  console.log("Sumbited");
};
function Form(props) {
  const fields = props.campos.map((fieldInfo) => {
    return (
      <div key={fieldInfo.id}>
        <RenderField fieldInfo={fieldInfo} />
      </div>
    );
  });
  return (
    <div>
      <h1>Sample Form</h1>
      <form onSubmit={handleSumbit}>
        {fields}
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}

export default Form;
