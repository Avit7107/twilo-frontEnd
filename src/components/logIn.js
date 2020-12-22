import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button,Grid,Header,Form,Segment,GridColumn } from 'semantic-ui-react'

function LogIn({user:{username,moblienumber,verificationCode,verificationSent,},setUser,sendSmsCode,sendverificationCode}) {
 
        function populateFileds (event,data) {
            setUser((draft) => {
                draft[data.name]=data.value;
                
            });
           }
        return (
           <div>
          <Grid textAlign='center' verticalAlign='middle' style={{height:"100px"}}>
          <GridColumn style={{maxWidth: 450}}>
           <Header as='h2'color='teal' textAlign='center'>
            LogIn into your account
          </Header>
           <Form>
          <Segment stacked>
            <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='UserName'
            value={username}
            onChange={(event,data) => populateFileds(event,data)}  
            name="username"
            />
            
            <Form.Input
            fluid
            icon='mobile alternate'
            iconPosition='left'
            placeholder='MoblileNumber'
            value={moblienumber}
            onChange={(event,data) => populateFileds(event,data)}
            name="moblienumber"  
            />
            {verificationSent &&
            <Form.Input
            fluid
            icon='key'
            iconPosition='left'
            placeholder='Enter your code'
            value={verificationCode}
            onChange={(event,data) => populateFileds(event,data)}
            name="verificationCode" 
            />}
            <Button color='teal' fluid size='large' onClick={!verificationSent? sendSmsCode:sendverificationCode }>
                {!verificationSent? "log In/sighn up" : "enter code"} </Button>

        </Segment>
       </Form>
      </GridColumn>
     </Grid>

 </div>
    );





}
export default LogIn;

// function LogIn 
//   return (
//     <Form className="login">
//     <Form.Group controlId="formBasicUser">
//       <Form.Label  column="sm" lg={2} >User Name</Form.Label>
//       <Form.Control 
//       name="username" 
//       defultValue={userName} 
//       onChange={(event,data ) => populateFileds(event.data)}  
//       placeholder="Enter name" />
//     </Form.Group>
  
//     <Form.Group controlId="formBasicmoblieNumber">
//       <Form.Label  column="sm" lg={2} >moblieNumber</Form.Label>
//       <Form.Control name="moblienumber" type="tel"  
//       placeholder="moblieNumber" 
//       defultValue={moblieNumber}
//        onChange={(event,data) => populateFileds(e.target.value)}/>
//     </Form.Group>
//     <Form.Group controlId="formBasicCheckbox">
//       <Form.Check type="checkbox" label="Check me out" />
//     </Form.Group>
//     <Button variant="primary" type="submit">
//       Send
//     </Button>
//   </Form>
//   );
// }

