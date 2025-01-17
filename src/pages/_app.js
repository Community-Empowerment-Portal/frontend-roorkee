import { FormProvider } from "@/Context/FormContext";
import { TabProvider } from "@/Context/TabContext";
import "@/styles/globals.css";

import { PrimeReactProvider } from "primereact/api";
import { AuthProvider } from "@/Context/AuthContext";
import { PageProvider } from "@/Context/PageContext";
import { FilterProvider } from "@/Context/FilterContext";
import { SchemeProvider } from "@/Context/schemeContext"
import { BookmarkProvider } from "@/Context/BookmarkContext";
import { PreferenceProvider } from "@/Context/preferenceContext";
import RedirectHandler from "@/components/ComponentsUtils/RedirectHandler";


export default function App({ Component, pageProps }) {
  return (
    <PreferenceProvider>
      <FilterProvider>
        <PageProvider>
          <TabProvider>
            <AuthProvider>
            <SchemeProvider>
              <FormProvider>
                <PrimeReactProvider>
                  <BookmarkProvider>
                  <div className="flex flex-col min-h-screen">
                    {/* Main Content */}
                    <div className="flex-grow">
                      {/* <RedirectHandler /> */}
                      <Component {...pageProps} />
                    </div>

                  </div>
                  </BookmarkProvider>
                </PrimeReactProvider>
              </FormProvider>
              </SchemeProvider>
            </AuthProvider>
          </TabProvider>
        </PageProvider>
      </FilterProvider>
    </PreferenceProvider>
  );
}
