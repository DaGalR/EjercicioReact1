import React from "react";
import useForm from "../customHooks/useForm";
import validateForm from "../utils/validateForm";
function RenderField({ errs, func, fieldInfo }) {
  return (
    <>
      <label htmlFor={fieldInfo.name}>{fieldInfo.name}:</label>
      <input
        className="form-control"
        type={fieldInfo.type}
        name={fieldInfo.name}
        placeholder={fieldInfo.placeholder}
        onChange={func}
        id={fieldInfo.id}
      />
      {errs[fieldInfo.name] && <p>{errs[fieldInfo.name]}</p>}
    </>
  );
}

function Form(props) {
  const { handleChange, handleSubmit, errors } = useForm(
    validateForm,
    props.campos
  );
  const fields = props.campos.map((fieldInfo) => {
    return (
      <div className="form-group" key={fieldInfo.id}>
        <RenderField errs={errors} func={handleChange} fieldInfo={fieldInfo} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Sample Form</h1>
        </div>
      </div>
      <div className="row" id="formulario">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            {fields}
            <button type="submit" className="btn btn-primary">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
