# React FHIR Client

> React Hooks for fhirclient. Use fhirclient with an easy React Hook.

## Getting started

1. Add your `FhirClientProvider` to your ReactDOM tree.

```js
ReactDOM.render(
  <React.StrictMode>
    <FhirClientProvider>
      <App />
    </FhirClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

2. Use `useFhirClient()` in your hooks.

```js
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
```

3. Learn `fhirclient`.

This project uses [fhirclient](https://github.com/smart-on-fhir/client-js) under the hood. Check out it's [documentation](http://docs.smarthealthit.org/client-js/).
