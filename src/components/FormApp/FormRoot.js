import SimpleInput from './Input/SimpleInput';
//import BasicForm from './Input/BasicForm';
import './FormRoot.css'

const FormRoot = () => {
  return (
    <div className="app">
      <SimpleInput />
      {/* <BasicForm /> */}
    </div>
  );
}

export default FormRoot;