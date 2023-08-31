import React,{useEffect,useReducer,useState} from 'react'
import axios from "axios";
import {
  PlaylistContainer,
  Wrapper,
    Links,
    Playlists,
    Lists,
    Img,
    Addicon,
    
} from "../../Style/AllPlaylistStyle"
import { useStateProvider } from '../../utils/stateProvider'
import { reducerCases } from '../../utils/Constants';
import addtoplaylist from '../../assets/addtoplaylist.png'
import Footer from "../../components/Footer"
import  {  Input, Modal,Form,Button  } from "antd";
import { useDummy, usePages } from '../../utils/Context';
const Playlist = () => {


const [playlistName,setPlaylistName] = useState("")
const [playlistDesc,setPlaylistDesc] = useState("")
const [{token,playlists},dispatch] = useStateProvider();
const [reducerValue , forceUpdate] = useReducer(x=>x+1,0)








  useEffect(()=>{
  const getPlaylistData = async ()=>{
      const response = await axios.get("https://api.spotify.com/v1/me/playlists",{
          headers:{
              Authorization:'Bearer ' + token,
              "Content-Type":"appliacation/json"
          },
      });
      const {items} = response.data
      const playlists = items.map(({name,images,id})=>{
        return {
          name,
          images:images[0] ? images[0].url : addtoplaylist,
          id
        }      
       });
     dispatch({type:reducerCases.SET_PLAYLISTS,playlists})
  };
  getPlaylistData();
  
},[token,dispatch,reducerValue]);


const CreatePlaylist = async () => {
  try {
    
    const response = await axios.post(
      'https://api.spotify.com/v1/me/playlists',
      {
        name:playlistName,
        description: playlistDesc,
        public: false, 
      },{
      headers:{ 
        Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      }}
    );

    console.log('Playlist created:', response.data);
    forceUpdate();
  } catch (error) {
    console.error('Error creating playlist:', error);
  }
};


const changeCurrentPlaylist = (selectedPlaylistId) => {
dispatch({ type:reducerCases.SET_PLAYLIST_ID,selectedPlaylistId});

};


const [isModalOpen, setIsModalOpen] = useState(false);
const { TextArea } = Input;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);

  };


  const {setShowPages} =usePages();
  const {setDummy} = useDummy()
  const handleDummy = () =>{ 
  setDummy({albums:false,artists:false,bollywood:false,tracks:false,playlists:true,songlists:false,});
  setShowPages({home:true,search:false,library:true,playlist:false,like:false})
}





  return (
    <PlaylistContainer>
    <Wrapper>
    <Playlists >
    <Lists onClick={showModal} ><Addicon/><Links>ADD PLAYLISTS</Links></Lists>
      {
          playlists.map(({name,images,id})=>{
            return (
              <Lists key={id} onClick={()=>{changeCurrentPlaylist(id);handleDummy()}} ><Img src={images}/><Links>{name}</Links> </Lists>
            )
          })

        }
    <Modal title="Add Playlist" open={isModalOpen} onCancel={handleCancel  } 
        footer={[
          <Button form="form" type="primary" key="submit" htmlType="submit" onClick={()=>{CreatePlaylist();handleCancel()}} >Create Playlist</Button >
          ]}
        width={300} >
        
      <Form name="form"
          labelCol={{
            flex: '110px',
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
          style={{
            maxWidth: 250,      
          }}
          >
        <Form.Item label="Playlist name" name="name"
            rules={[{
                required: true,
              }]}>
          <Input placeholder="Playlist Name" style={{width:250}} 
          onChange={(e) => setPlaylistName(e.target.value)} value={playlistName}/>
        </Form.Item>

        <Form.Item label="Description" name="description"
          rules={[{
              required: true,
            }]}>
          <TextArea rows={3} placeholder="Description" maxLength={6} 
          onChange={(e)=>setPlaylistDesc(e.target.value)}  value={playlistDesc}/>
       </Form.Item>
      </Form>
    </Modal>
  </Playlists>

        <Footer/>
    </Wrapper>
    </PlaylistContainer>
  )
}


export default  Playlist


