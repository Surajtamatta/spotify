import { reducerCases } from "./Constants";

export const initialState={
    token:null,
    playlists:[],
    userInfo:null,
    currentPlaying:null,
    playerState: false,
    selectedPlaylist: null,
    selectedSong:null,
    selectedPlaylistId: "1MF7fdGWpgb2CvM2e3vAe5",
    selectedSongId:'5FtQVEQsWzRcpqh820ZoII',
    selectSongUri:'',
    genres:''
    
};

const reducer=(state,action)=>{
    switch(action.type){
        case reducerCases.SET_TOKEN:{
            return{
                ...state,token:action.token,
            }
        }
        case reducerCases.SET_PLAYLISTS:{
            return{
                ...state,
                playlists:action.playlists
            }
        }
        case reducerCases.SET_USER:{
            return{
                ...state,
                userInfo:action.userInfo
            }
        }
        case reducerCases.SET_NEW_RELEASES:{
            return{
                ...state,
                new_releases:action.new_releases
            }
        }
        case reducerCases.SET_ALBUMS:{
            return{
                ...state,
                albums:action.albums
            }
        }
        case reducerCases.SET_ARTISTS:{
            return{
                ...state,
                artists:action.artists
            }
        }
        case reducerCases.SET_TRACKS:{
            return{
                ...state,
                tracks:action.tracks
            }
        }
        case reducerCases.SET_SELECTEDPLAYLIST:
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            };
        case reducerCases.SET_PLAYLIST_ID:
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId,
            
            };
        case reducerCases.SET_SONG_ID:
            return {
                ...state,
                selectedSongId: action.selectedSongId,
            };
        case reducerCases.SET_SELECTEDSONG:
            return {
                ...state,
                selectedSong: action.selectedSong,
            };
        case reducerCases.SET_CREATEPLAYLISTS:
            return {
                ...state,
                createPlaylist: action.createPlaylist,
            };
        case reducerCases.SET_SONGURI:
            return {
                ...state,
                selectSongUri: action.selectSongUri,
            };
        case reducerCases.SET_GENRES:
            return {
                ...state,
                genres: action.genres,
            };
        
      
        default:
            return state;
    }
}

export default reducer;