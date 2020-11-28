import React, { useState, useEffect } from 'react';
import FHIR from 'fhirclient';

const FhirClientStateContext = React.createContext(undefined);

interface Props {
  children: React.ReactNode;
}

function FhirClientProvider(props: Props): React.ReactNode {
  const { children } = props;
  const [state, setClient] = useState();

  useEffect(() => {
    const connect = async () => {
      try {
        FHIR.oauth2.ready().then((client: any) => {
          console.log('connecting');
          console.log('connecting');
          setClient(client);
        });
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }
    };
    connect();
  }, []);

  return <FhirClientStateContext.Provider value={state}>{children}</FhirClientStateContext.Provider>;
}

function useFhirClient(): any {
  const context = React.useContext(FhirClientStateContext);
  return context;
}
export { FhirClientProvider, useFhirClient };

export default { FhirClientProvider, useFhirClient };
