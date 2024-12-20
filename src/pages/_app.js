import { FormProvider } from "@/Context/FormContext";
import { TabProvider } from "@/Context/TabContext";
import "@/styles/globals.css";
import { PrimeReactProvider } from 'primereact/api';
import { AuthProvider } from "@/Context/AuthContext";
import { PageProvider } from "@/Context/PageContext";
import {FilterProvider} from "@/Context/FilterContext";
import { PreferenceProvider } from "@/Context/preferenceContext";
import RedirectHandler from "@/components/ComponentsUtils/RedirectHandler";

export default function App({ Component, pageProps }) {

  return (
    <PreferenceProvider>
    <FilterProvider>
    <PageProvider>
    <TabProvider>
    <AuthProvider>
      <FormProvider>
        <PrimeReactProvider>
          <>
            {/* <RedirectHandler/> */}
            <Component {...pageProps} />
          </>
        </PrimeReactProvider>
      </FormProvider>
    </AuthProvider>
    </TabProvider>
    </PageProvider>
    </FilterProvider>
    </PreferenceProvider>
  );
}
