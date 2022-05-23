import React, { Component, Fragment, useState } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';  
import FileBase  from 'react-file-base64';


const handleSubmit = () => {
    
}

const clear = () =>{
    
}

const [postData, setPostData] = useState({
    creator: "", name:"", email:""
})

class Form extends Component{
    constructor(){
        super()

        this.state={
            hade:'Edit Anything'
        }
    }

    render(){
        return(
            <Fragment>
                <div>{this.state.hade}</div>
                <Paper className='paper'>
                    <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
                    <Typography variant="h6">Creating Project</Typography>
                    <TextField name="name" variant="outlined" label="Creator" fullWidth onChange={(e) => setPostData({ ...postData , name: e.target.value} )} value={postData.creator}/>
                    <TextField name="email" variant="outlined" label="email" fullWidth onChange={(e) => setPostData({ ...postData , email: e.target.value} )} value={postData.creator}/>
                    <div className='classes.fileinput'></div>
                    <FileBase>
                        type="file",
                        multiple={false}
                        onDone={({base64}) =>  setPostData({ ...postData, selectedFile: base64})}
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                        <Button  variant="contained" color="primary" size="small" onClick={clear}fullWidth>Clear</Button>
                    </FileBase>
                    </form>
                </Paper>
            </Fragment>
        )
    }
}

export default Form;