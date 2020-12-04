import React, { Component } from "react";
import EmployeeCard from './components/EmployeeCard/index';
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import {Button, FormGroup, Label, Input } from 'reactstrap';




class App extends Component {
 
  state = {
    employees,
    empSearch: ""
  };

handleSearch = (event) => {
  const results = employees.filter(employee=>employee.name==event.target.value);
  console.log(results);
  // if(this.state.employees.length === 1) {
    this.setState({
      employees: results
    })
  // } 
  
}

handleReset = () => {
  this.setState({
    employees: employees
  })
}

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        
        <FormGroup>
        <Label for="searchbar" hidden></Label>
        <Input type="text" name="searchbar" id="searchbar" placeholder="search" onChange={this.handleSearch}/>
        <Button color="primary" onClick={this.handleReset}>Reset</Button>
        </FormGroup>
        <div style={{display:"flex"}}>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            jobTitle={employee.jobTitle}
            location={employee.location}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;