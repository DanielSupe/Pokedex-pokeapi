import React from 'react';
import ReactDOM from 'react-dom';
import { HookApp } from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { UseEffect2 } from './components/02-useEffect/UseEffect2';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { Pokedex1 } from './components/02-useEffect/Pokedex1';

ReactDOM.render(<Pokedex1/>,document.getElementById("root"))
