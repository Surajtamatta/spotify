
import './App.css';
import Main from './Main';
import GlobalStyle from "./Style/GlobalStyle"
import ConnectApp from './components/ConnectApp';
import { useEffect } from 'react';
import { useStateProvider } from './utils/stateProvider';
import { reducerCases } from './utils/Constants';
import { DummyProvider,PagesProvider,SearchProvider,PlayerProvider ,SearchResultProvider,SearchValueProvider} from './utils/Context';


function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
  }, [dispatch, token]);
  return (
    <>
  <GlobalStyle/>
   <PagesProvider>
   <DummyProvider  >
   <SearchProvider>
    <SearchResultProvider>
   <SearchValueProvider>
    <PlayerProvider>

   {token ? <Main/> : <ConnectApp/>}
   
   </PlayerProvider>
   </SearchValueProvider>
   </SearchResultProvider>
   </SearchProvider>
   </DummyProvider>
   </PagesProvider>
   
  </>
  );
}

export default App;
