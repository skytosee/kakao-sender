import React, { useState, useEffect } from "react";
import { Box, Grid, TextField, Button} from '@mui/material'
import CardList from '../component/CardList'
import styles from '../css/Main.module.css';

const Main = (props) => {
    const token = props.token;
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    useEffect(()=> {      
        console.log('token : ', token);                    
        const getList = async() => {
            const url = "https://kapi.kakao.com/v1/api/talk/friends"
            const headers = {
                'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                "Authorization": "Bearer " + token
            }  
            const response = await fetch(url, { method: "GET", headers: headers })
            if (response.ok) {
                const data = await response.json();
                console.log("friends", data);
                setList(data);
            } 
        }
        getList();                      
    }, [])

    const handleTextChange = (event) => {
        if (event.target.id === "text") 
            setText(event.target.value);   
    };

    const handleSendClick = async () => { 
        try {
            /*
          const transactionId = Date.now().toString(36) + Math.random().toString(36).substring(2);         
          const timestamp = Math.floor(Date.now() / 1000).toString();  
          const wehagoSign = token + transactionId + timestamp + url;
          const shaSignature = CryptoJS.HmacSHA256(wehagoSign, hashKey).toString(CryptoJS.enc.Base64);
          
          const response = await fetch(domain + url, {
                            method: "POST",
                            headers: {
                              'Content-type': 'application/json',
                              'Content-Encoding': 'utf-8',
                              'transaction-id': transactionId, 
                              'Authorization': 'Bearer ' + token,
                              'wehago-sign': shaSignature,
                              'timestamp': timestamp,                      
                            },
                            body: param
                          }) 
          if (response.ok) {        
            const body = await response.json();        
          } 
          */
        }
        catch (error) {
          console.error(error);       
        }
      };
      


    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container> 
            <Grid item xs={4} className={styles.paddingAll}>
                <CardList>
                </CardList>
            </Grid>
            <Grid item xs={8} className={styles.paddingAll}>
                <Button className={styles.marginBottom} variant="contained" onClick={handleSendClick}>Send</Button>
                <TextField id="text" label="Text" variant="outlined" value={text} multiline fullWidth rows={10} onChange={handleTextChange} 
                    InputProps={{
                        readOnly: true,
                    }} />    
            </Grid>
        </Grid>      
      </Box>
    );
}; 

export default Main;