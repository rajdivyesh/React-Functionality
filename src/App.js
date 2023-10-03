import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [submittedData, setSubmittedData] = useState('');


  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) =>{
    setLastName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedInfo = `First Name: ${firstname}, Last Name: ${lastname}`;
    setSubmittedData(submittedInfo);
  };

  return (
    <div className="App" style={{backgroundColor: 'lightblue'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
                type="text"
                value={firstname}
                onChange={handleFirstNameChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
                type="text"
                value={lastname}
                onChange={handleLastNameChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {submittedData && (
            <div>
              <p>Submitted Data:</p>
              <p>{submittedData}</p>
            </div>

        )}
      </header>
    </div>
  );
}

export default App;
/*
const NewForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Add the form data to the submittedData state
    setSubmittedData([...submittedData, formData]);

    // Clear the form fields
    setFormData({ firstName: '', lastName: '' });
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="random" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
              />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>

          {submittedData.length > 0 && (
              <table style={{ marginTop: '20px' }}>
                <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                {submittedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td> <img src={logo} className="App-logo" alt="random"  style={{ width: '100px', height: '100px' }}/></td>
                    </tr>
                ))}
                </tbody>
              </table>
          )}
        </header>
      </div>
  );
};

export default NewForm;

 */