'use client'
import React,{useState,useEffect} from 'react';
import { MdEmail, MdPhone, MdLanguage,MdStar, MdPersonAdd, MdDelete } from 'react-icons/md';
import { Card, Text, Button  } from '@mantine/core';
import './style.css';
const MyCard = ({ contactss, onDelete }) => {
    const [isFollowing, setIsFollowing] = useState(false);
    let contact  = contactss;


    const handleFollowToggle = () => {
      setIsFollowing((prevFollowing) => !prevFollowing);
    };
  
    const handleDeleteContact = (id) => {
        onDelete(id);
    };
//    const contact={
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     // "address": {
//     //   "street": "Kulas Light",
//     //   "suite": "Apt. 556",
//     //   "city": "Gwenborough",
//     //   "zipcode": "92998-3874",
//     //   "geo": {
//     //     "lat": "-37.3159",
//     //     "lng": "81.1496"
//     //   }
//     // },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }}
    return (
        <Card >
        <div style={{ textAlign: 'center'}}>
        <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${contact.name}`} alt={contact.name} width={60} height={60} style={{ borderRadius: '50%',marginBottom:10}}/>
        
        <Text size="xl">{contact.name} {isFollowing && <MdStar style={{ fontSize: 16, color: 'gold' }} />}</Text>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
          <MdEmail style={{ marginRight: 5 }} />
          <Text  size="sm"><a href={`mailto:${contact.email}`}>{contact.email}</a></Text>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
          <MdPhone style={{ marginRight: 5 }} />
          <Text size="sm"><a href={`tel:${contact.phone}`}>{contact.phone}</a></Text>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MdLanguage style={{ marginRight: 5 }} />
          <Text size="sm"><a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a></Text>
        </div>
        </div>
        <div style={{ display:'flex',justifyContent: 'space-between', alignItems: 'center' }}>
          <Button onClick={handleFollowToggle} variant={isFollowing ? 'light' : 'outline'} color="blue">
          <MdPersonAdd /> {isFollowing ? 'Unfollow' : 'Follow'}
          </Button>
          <Button  onClick={handleDeleteContact} variant="light" color="red">
          <MdDelete /> Delete
          </Button>
        </div>
      </Card>
    );
  };
  export default MyCard;