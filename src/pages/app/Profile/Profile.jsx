import React, { useState, useEffect } from 'react'
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import { useAuth } from "../../auth/AuthContext";
import Avatar from '@mui/material/Avatar';
import {
  Block,
  Title,
  Text,
  ProfileSettings,
  Input,
  TextAerea,
  Button
} from './profile.style'

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
  },)

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


export default Profile