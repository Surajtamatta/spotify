import { useState,createContext,useContext } from "react";



const DummyContext = createContext({});


export const DummyProvider = ({children}) => {
  const [ dummy, setDummy ] = useState({
    albums:true,
    artists:true,
    bollywood:true,
    tracks:true,
    playlists:false,
    songlists:false,
});
  
  return (
    <DummyContext.Provider value={ {
      ...dummy, 
      setDummy: (data) => setDummy({...dummy, ...data})
    }}>
      {children}
    </DummyContext.Provider>
  );
};

export const useDummy = () => {
const {
  albums,
  artists,
  bollywood,
  tracks,
  playlists,
  songlists,
  dummy,
  setDummy,
  } = useContext(DummyContext);
  return {
  albums,
  artists,
  bollywood,
  tracks,
  playlists,
  songlists,
  dummy,
  setDummy,
  };
};




const SearchContext= createContext({});


export  const  SearchProvider = ({children})=>{
  const [showSearch,setShowSearch] = useState(false);
  return (
  <SearchContext.Provider value={{showSearch,setShowSearch}}>
    {children}
  </SearchContext.Provider>
  );
}

export const useSearch=()=>{
  const{ showSearch,setShowSearch}=useContext(SearchContext);
  return {
    showSearch,
    setShowSearch
  }
}


const PagesContext= createContext({});
export  const  PagesProvider = ({children})=>{
  const [showPages,setShowPages] = useState({
    home:true,
    search:false,
    library:false,
    playlist:false,
    like:false
  });
  return (
  <PagesContext.Provider value={{
    ...showPages,
    showPages,
    setShowPages:(data)=>setShowPages({...showPages,...data})
    }}>
    {children}
  </PagesContext.Provider>
  );
}

export const usePages=()=>{
  const{ 
    home,
    library,
    search,
    like,
    playlist,
    showPages,
    setShowPages}=useContext(PagesContext);
  return {
    home,
    library,
    search,
    like,
    playlist,
    showPages,
    setShowPages
  }
}




const PlayerContext= createContext({});
export  const  PlayerProvider = ({children})=>{
  const [showPlayer,setShowPlayer] = useState(false);
  return (
  <PlayerContext.Provider value={{showPlayer,setShowPlayer}}>
    {children}
  </PlayerContext.Provider>
  );
}

export const usePlayer=()=>{
  const{ showPlayer,setShowPlayer}=useContext(PlayerContext);
  return {
    showPlayer,
    setShowPlayer
  }

}





const SearchResultContext= createContext({});
export  const  SearchResultProvider = ({children})=>{
  const [searchResult,setSearchResult] = useState([]);
  return (
  <SearchResultContext.Provider value={{searchResult,setSearchResult}}>
    {children}
  </SearchResultContext.Provider>
  );
}

export const useSearchResult=()=>{
  const{ searchResult,setSearchResult}=useContext(SearchResultContext);
  return {
    searchResult,
    setSearchResult
  }

}



const SearchValueContext= createContext({});
export  const SearchValueProvider = ({children})=>{
  const [searchValue,setSearchValue] = useState('');
  return (
  <SearchValueContext.Provider value={{searchValue,setSearchValue}}>
    {children}
  </SearchValueContext.Provider>
  );
}

export const useSearchValue=()=>{
  const{ searchValue,setSearchValue}=useContext(SearchValueContext);
  return {
    searchValue,
    setSearchValue
  }

}




