import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Entry.css';
import axios from 'axios';
import EntryDisplay from './EntryDisplay';

const EntryForm = () => {
   //To get data from api
   const [entry, setEntry] = useState([]);

   //To post
   const [inputValues, setInputValues] = useState([
      {
         subject: '',
         description: '',
      },
   ]);
   const [subject, setSubject] = useState('');
   const [description, setDescription] = useState('');
   const [submit, setSubmit] = useState('');

   const postData = () => {
      return {
         subject: subject,
         description: description,
      };
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post(`http://localhost:5000/api/entry`, postData())
         .then((response) => {
            console.log(response);
            // setInputValues({
            //    ...inputValues,
            //    subject: subject,
            //    description: description,
            // });
            setSubject('');
            setDescription('');
         })
         .catch((err) => {
            console.log(err);
         });
   };

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/entry`)
         .then((response) => {
            console.log(response.data);
            setEntry(response.data);
         })
         .catch((error) => console.log(error));
   }, []);

   let history = useHistory();
   const handleLogout = () => {
      localStorage.removeItem('authToken');
      history.push('/');
   };

   return (
      <div className="entry-wrapper">
         {/* Posting */}

         <div>
            <form onSubmit={handleSubmit} className="entry-form-input">
               <div className="past-entry-heading">
                  <h2>My Daily Entry</h2>
               </div>
               <textarea
                  className="input-heading"
                  rows="1"
                  cols="50"
                  type="text"
                  placeholder="Heading"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
               />
               <textarea
                  className="input-thoughts"
                  rows="5"
                  cols="50"
                  type="textarea"
                  placeholder="My thoughts"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               />
               <button type="submit" className="button-post">
                  Post
               </button>
            </form>
         </div>

         <button onClick={handleLogout} className="button-logout">
            Log Out
         </button>

         {/* Fetching Data from database */}
         <div className="past-entry-wrapper">
            <div className="past-entry-heading">
               <h2>My Past Entries</h2>
            </div>

            <div className="box-wrapper">
               {entry.map((item, i) => (
                  <EntryDisplay
                     key={item.id}
                     item1={item.subject}
                     item2={item.description}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default EntryForm;
