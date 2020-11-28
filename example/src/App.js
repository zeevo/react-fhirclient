import { useState, useEffect } from 'react';
import { useFhirClient } from 'react-fhirclient';

function App() {
  const [patient, setPatient] = useState();
  const fhirclient = useFhirClient();

  useEffect(() => {
    const getPatient = async () => {
      if (fhirclient) {
        const patient = await fhirclient.request(`Patient/${fhirclient.patient.id}`);
        setPatient(patient);
      }
    };
    getPatient();
  }, []);

  return (
    <div className="App">
      <pre>
        <code>{JSON.stringify(patient, null, 2)}</code>
      </pre>
    </div>
  );
}

export default App;
