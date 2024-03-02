'use client'
import "./style.css";
import { theme } from "../theme";
import React,{useState, useEffect} from 'react';
import { Container, Grid ,GridCol } from '@mantine/core';
import MyCard from './MyCard';
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export default function HomePage() {

const[contacts, SetContact]=useState([]);

useEffect(()=>{
  const fetchdata=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  let Data=await res.json();
  SetContact(Data)
  }
  fetchdata();
},[]);
const handleDelete = (id) => {

  const updatedContacts = contacts.filter(contact => contact.id !== id);
  SetContact(updatedContacts);
};
  return (


    <div className="card-grid">
      <Grid className="card-content">
        {contacts.map((contact) => (
          <div className="card">

            <MyCard contactss={contact} onDelete={() => handleDelete(contact.id)}/>
          </div>
        ))}
      </Grid>
    </div>
  );
};



    
            
