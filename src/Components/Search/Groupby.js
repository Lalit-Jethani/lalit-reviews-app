import React from 'react';
import {FormControl} from 'react-bootstrap';



class GroupBy extends React.Component {
   constructor(props){
       super(props);
       this.state = {
        select : ''
    }

   }
    
    handleSelect = (e) =>{
        this.setState({ select: this.inputEl.value });
        this.props.onSelectOrderBy(this.inputEl.value);
    }

    render(){
    return (<FormControl className="" id='select' onChange = {this.handleSelect.bind(this)}
    inputRef={ el => this.inputEl=el }
   componentClass="select" placeholder="select">
   {this.props.options.map((option)=>{
       return <option value={option.value}>{option.text}</option>
   })}
  </FormControl>)
    }
}

export default GroupBy;