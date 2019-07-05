import React from 'react';
import ReactDOM from 'react-dom';
import {TAinamte} from './TAinamte';

const suggestions = ['C', 'C++', 'Python', 'Java', 'Javascript', 'PHP'];
const handleSelect = selection => alert(`You selected ${selection}`);

let opts = {
    
}

ReactDOM.render(<TAinamte {...opts}/>, document.getElementById('app'));