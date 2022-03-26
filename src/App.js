import {useEffect, useState } from 'react';
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import './App.css';


function App() {
  const [names, setNames] = useState([])
  const [fieldEntry, setField] = useState('')
  useEffect(() => {

  }, [fieldEntry])
  

  const submitHandler = (e) => {
    e.preventDefault()
    if (fieldEntry.length < 1) {
      return null
    }
    setNames([{ name: fieldEntry, winner: false }, ...names])
    return setField('')
  }

  const pickHandler = () => {
    console.log('fire')
    const random = Math.floor(Math.random() * names.length)

    setNames(names.map((obj, idx) => {
      obj.winner = false
      return obj
    }))

    setNames(names.map((obj, idx) => {
      if (idx === random) {
        obj.winner = !obj.winner
      }
      return obj
    }))
  }

  return (
    <div className="App">
      <form onSubmit={(e) => submitHandler(e)}>
      <FormGroup>
        <List>
          {names.length > 0 ? names.map((obj, idx) => <ListItem key={`${idx}-${obj.name}`} className={obj.winner ? 'winner' : 'loser'}>{obj.name}</ListItem>) : <ListItem>No Names</ListItem>}
        </List>
        <FormControl>
          <InputLabel htmlFor='user' />
          <Input id='user' onChange={(e) => setField(e.currentTarget.value)} value={fieldEntry} placeholder="Enter A Name" />
          <ButtonGroup variant="outline" aria-label="outlined primary button group">
            <Button type='submit'>Submit</Button>
            <Button onClick={pickHandler}>Pick Winner</Button>
          </ButtonGroup>
        </FormControl>
      </FormGroup>
      </form>
    </div>
  );
}

export default App;
