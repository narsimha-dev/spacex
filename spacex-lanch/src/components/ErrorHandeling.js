import React from 'react';
import { Alert } from 'react-bootstrap';

 export const ErrorHandeling=(message)=>{
return <Alert color="danger">{message}</Alert>  
}