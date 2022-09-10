import React, { useState, useEffect } from 'react'
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import styled from 'styled-components'
import { useAuth } from "../../auth/AuthContext";
import Avatar from '@mui/material/Avatar';

function Profile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState([]);
  const [userName, setUserName] = useState('');
  const [biography, setBiography] = useState('');

  useEffect(() => {
    async function getProfile() {
      onSnapshot(doc(db, "usersProfile", user.uid), (doc) => {
        setProfile(doc.data())
      });
    }
    getProfile()
  }, [])

  async function updateProfile() {
    const userProfile = {
      userName: userName ? userName : profile.userName,
      biography: biography ? biography : profile.biography
    }
    setDoc(doc(db, 'usersProfile', user.uid), userProfile)
  }

  function validate() {
    if (userName && biography) {
      updateProfile()
    } else if (userName && !biography) {
      alert('La biografía es necesaria')
    } else if (!userName && biography) {
      alert('El Nombre de usuario es necesario')
    }
  }

  return (
    <Block>
      <Avatar className='avatar'>{user.email[0]}</Avatar>
      <Title>{user.email}</Title>
      <Text className='subtitle'> Gestione su información personal </Text>
      <ProfileSettings>
        <Text className='form-text'>Nombre de usuario</Text>
        <Input
          type="text"
          placeholder={profile ? profile.userName : null}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Text className='form-text'>Biografía</Text>
        <TextAerea
          type="text"
          placeholder={profile ? profile.biography : null}
          onChange={(e) => setBiography(e.target.value)}
        />
        <Button onClick={() => validate()}>Guardar</Button>
      </ProfileSettings>
    </Block>
  )
}

const Block = styled.div`
  margin: 0 auto;
  position: relative;
  width: 75%;
  text-align: center;
  margin-top: 80px;
  .avatar {
    position: relative;
    margin: 0 auto;
    background-color: #3B79D3;
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 40px;
    width: 100px;
    height: 100px;
  }
`;
const Title = styled.div`
    padding: 0px 34px;
    font-size: 26px;
    font-weight: bold;
`;

const Text = styled.div`
  &.subtitle {    
    font-weight: bolder;
    margin: 40px;
  }
`;

const ProfileSettings = styled.div`
  position: relative;
  display: inline-grid;
  width: 300px;
  text-align: initial;
  .form-text {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  height: 25px;
  margin-bottom: 20px;
`;

const TextAerea = styled.textarea`
  margin-bottom: 20px;
  border-radius: 5px;
  height: 80px;
`;

const Button = styled.button`
  background: #3B79D3;
  border-radius: 10px;
  font-weight: 600;
  color: #ffffff;
  font-size: 15px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

export default Profile