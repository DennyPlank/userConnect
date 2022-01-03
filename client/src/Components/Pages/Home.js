import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
  const auth = useContext(AuthContext);
  const [friends, setFriends] = useState([])

  useEffect(()=>{
    getFriends();
  }, []);

  const getFriends = async () => {
    try {
      // access token is getting sent here (devise axios)
      let res = await axios.get('/friends')
      setFriends(res.data)
      console.log("Friends Called")
    } catch (err) {
      alert("err in getFriends")
    }
  }
  const renderFriend = () => {
    let friend = sample()
    if (!friend){
      return <p>No mor Friends</p>
    } 

  const sendMessage = () => {
    console.log("send message hit")
  }
    return (
      <div>
        <p>{`Friend of the day: ${friend.name}`}</p>
        <button onClick={()=> sendMessage()}>Message</button>
        <button>Like</button>
      </div>
    )
  }

  const sample = () => {
    if (friends.length){
      const index = Math.floor(Math.random()*friends.length)
      return friends[index];
    } 
    return null;
  }

  return (
    <div>
      <h1> HOME </h1>
      {auth.email ? (`${(auth.email)} is logged in`) : "Hacker!"}
      <hr />
      {renderFriend()}
    </div>
  )
};

export default Home;