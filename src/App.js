
import React, { useState } from 'react';
import {makeStyles} from '@material-ui/styles';
import {Toolbar,Input,Grid,Typography,MenuItem,Select} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';






const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    height: '100vh',
  },
  top: {
    width:'100%',
    height: '15vh',
    display:'flex',
    justifyContent:'space-between'
  },
  divid: {
    backgroundColor:'black'
  },
  main:{
    width:'100%',
    height: '85vh',
    display:'flex',
    flexDirection:'row',
  },
  left: {
    border: "1px solid",
    height: '85vh',
    paddingLeft:'5%',
    paddingTop:'2%',
    paddingRight:'5%',
  },
  right: {
    border: "1px solid",
    height: '85vh',
    paddingLeft:'2%',
    paddingTop:'2%',
  },
  search: {
    width:'100%',
    height: '10vh',
    
  },
  mainsecond: {
    width:'100%',
    height: '15vh',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  mainbutton:{
    display:'flex',
    flexDirection:'row'
   
  },
  searchInput: {
    flexGrow: 1,
    border: "1px solid",
    borderRadius:'25px',
    width:'30%',
    paddingLeft:'15%'
  },
  Input: {
    flexGrow: 1,
    border: "1px solid",
    width:'50%',
    paddingLeft:'2%'
  },
  table:{
    height: '35vh',
  },
  cell:{
    cursor:'pointer'
  }
}));


function App() {
  const [bhp, setbhp] = useState([[0,0]]);
  const [nab, setnab] = useState([[0,0]]);
  const [cash, setcash] = useState(10000);
  const [quantity,setquantity] = useState('');
  const [selection,setselection] = useState('');
  const [se,setse]=useState(0);
  const handlereset = () => {
    setse(0);
    document.getElementById("bhp").style.backgroundColor = "";
    document.getElementById("nab").style.backgroundColor = "";
    setbhp([[0,0]]);
    setnab([[0,0]]);
    setcash(1000);
    setselection('');
    setquantity('');
  }
  const handlebhp = (event) => {
    document.getElementById("bhp").style.backgroundColor = "red";
    document.getElementById("nab").style.backgroundColor = "";
    setse(1);
  }
  const handlenab = (event) => {
    document.getElementById("bhp").style.backgroundColor = "";
    document.getElementById("nab").style.backgroundColor = "red";
    setse(2);
  }
  const handleChange = (event) => {
    setselection(event.target.value);
  };

  const handletrade = () => {
     switch(se){
       case 1:
        if(selection==10){
            if(cash>=parseInt(quantity)*40){
              let temp=[parseInt(quantity)+bhp[bhp.length-1][0],(parseInt(quantity)+bhp[bhp.length-1][0])*40]
              let b=bhp;
              b.push(temp)
              setbhp(b)
              document.getElementById("bhp").getElementsByTagName('td')[0].innerHTML=bhp[bhp.length-1][0];
              document.getElementById("bhp").getElementsByTagName('td')[1].innerHTML=bhp[bhp.length-1][1];
              let ca= cash-parseInt(quantity)*40;
              setcash(ca);
            }
            else{
              alert("you cannot buy more than "+parseInt(cash/40)+".")
            }
            
          }
          else if(selection==20)
          {
            if(bhp[bhp.length-1][0]>=parseInt(quantity)){
              let temp=[bhp[bhp.length-1][0]-parseInt(quantity),(bhp[bhp.length-1][0]-parseInt(quantity))*40]
              let b=bhp;
              b.push(temp)
              setbhp(b)
              document.getElementById("bhp").getElementsByTagName('td')[0].innerHTML=bhp[bhp.length-1][0];
              document.getElementById("bhp").getElementsByTagName('td')[1].innerHTML=bhp[bhp.length-1][1];
              let ca= cash+parseInt(quantity)*40;
              setcash(ca);
            }
            else{
              if(bhp[bhp.length-1][0]==0){
                alert("you have no thing to sell.")
              }
              else{
                alert("you cannot sell more than "+bhp[bhp.length-1][0]+".")
              }
              
            }
          }
          break;
        case 2:
          if(selection==10){
            if(cash>=parseInt(quantity)*30){
              let temp=[parseInt(quantity)+nab[nab.length-1][0],(parseInt(quantity)+nab[nab.length-1][0])*30]
              let b=nab;
              b.push(temp)
              setnab(b)
              document.getElementById("nab").getElementsByTagName('td')[0].innerHTML=nab[nab.length-1][0];
              document.getElementById("nab").getElementsByTagName('td')[1].innerHTML=nab[nab.length-1][1];
              let ca= cash-parseInt(quantity)*30;
              setcash(ca);
            }
            else{
              alert("you cannot buy more than "+parseInt(cash/30)+".")
            }
            }
            else if(selection==20)
            {
              if(nab[nab.length-1][0]>=parseInt(quantity)){
                let temp=[nab[nab.length-1][0]-parseInt(quantity),(nab[nab.length-1][0]-parseInt(quantity))*30]
                let b=nab;
                b.push(temp)
                setbhp(b)
                document.getElementById("nab").getElementsByTagName('td')[0].innerHTML=nab[nab.length-1][0];
                document.getElementById("nab").getElementsByTagName('td')[1].innerHTML=nab[nab.length-1][1];
                let ca= cash+parseInt(quantity)*30;
                setcash(ca);
              }
              else{
                if(nab[nab.length-1][0]==0){
                  alert("you have no thing to sell.")
                }
                else{
                  alert("you cannot sell more than "+nab[nab.length-1][0]+".")
                }
                
              }
            }
            break;
       }
    
  
  };
  const handlequantity =(event)=>{
      setquantity(event.target.value)
  };




  const classes = useStyles();

  return (
    <>
    <Grid container spacing={1} className={classes.root}>
      <Grid item container direction={"row"} className={classes.top}>
        <Grid item lg={7} md={7} sm={7} xs={7} style={{display:'flex', alignSelf:'flex-end',paddingLeft:'23%'}} >
          <Typography variant="h3">
            Paper Trader
          </Typography>
        </Grid>
        <Grid item container lg={3} md={3} sm={3} xs={3}>
          <Grid item lg={4} md={4} sm={4} xs={4} style={{display:'flex', alignSelf:'flex-end'}}>
            <Typography>
              Welcome,
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4} style={{display:'flex', alignSelf:'flex-end'}}>
            <Typography>
              Username
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4} style={{display:'flex', alignSelf:'flex-end'}}  >
            <Typography >
              Logout
            </Typography>
          </Grid>
        </Grid>
       
      </Grid>
      <Grid container item className={classes.main}>
          <Grid item lg={7} md={7} sm={7} xs={7} className={classes.left}>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.search}>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Toolbar>
                      <Input
                        className={classes.searchInput}
                        disableUnderline
                        placeholder="Search..."
                        // value={value}
                        // onChange={handleChange}
                      />
                </Toolbar>       
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className={classes.mainsecond}>
               <text>BHP - BHP Group Limited</text>
               <Grid className={classes.mainbutton}>
                 <Grid item style={{marginLeft:'15%'}}>
                    <Button variant="contained" color="primary">
                        Buy
                    </Button>
                 </Grid>
                 <Grid item style={{marginLeft:'15%'}}>
                    <Button variant="contained" color="secondary">
                        Sell
                    </Button>
                  </Grid>
                </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} style={{display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <div style={{width:'10px',height:'10px',backgroundColor:'green',alignItems:'center'}}></div>
                <text>BHP</text>
            </Grid>
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={5} className={classes.right}>
            <Grid item lg={10} md={10} sm={10} xs={10} className={classes.search}>
              <Typography>
                Portofolio
              </Typography>
            </Grid>
            <Grid item lg={10} md={10} sm={10} xs={10} >
                <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Stock</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Value</TableCell>
                      <TableCell align="right">Buy/Sell</TableCell>
                    
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow id="bhp" onClick={handlebhp} className={classes.cell}>
                        <TableCell component="th" scope="row">BHP</TableCell>
                        <TableCell align="right">{bhp[bhp.length-1][0]}</TableCell>
                        <TableCell align="right">{bhp[bhp.length-1][1]}</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                      <TableRow id="nab" onClick={handlenab} className={classes.cell}>
                        <TableCell component="th" scope="row">NAV</TableCell>
                        <TableCell align="right">{nab[nab.length-1][0]}</TableCell>
                        <TableCell align="right">{nab[nab.length-1][1]}</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                      <TableRow id="cash" className={classes.cell}>
                        <TableCell component="th" scope="row">CASH</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">{cash}</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                  </TableBody>
                  </Table>
                </TableContainer>
            </Grid>
            <Grid item lg={10} md={10} sm={10} xs={10} style={{display:'flex',flexDirection:'row',marginTop:'2%'}}>
               
                 {
                   se==1?
                   <text style={{fontWeight:'bold'}}>Nab: </text> 
                   :
                   se==2?
                   <text style={{fontWeight:'bold'}}>Bhp: </text> 
                   :null
                 }
                  {
                   se==1?
                   <text style={{fontWeight:'bold'}}> you have {bhp[bhp.length-1][0]} shares at $40.00 per share.</text> 
                   :
                   se==2?
                   <text style={{fontWeight:'bold'}}> you have {nab[nab.length-1][0]} shares at $30.00 per share.</text> 
                   :null
                 }
            </Grid>
            <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',marginTop:'3%'}}>
               <Grid item lg={3} md={3} sm={3} xs={3}>
                    <Input
                        className={classes.Input}
                        disableUnderline
                        placeholder="quantity"
                        value={quantity}
                        onChange={handlequantity}
                      />
               </Grid> 
               <Grid item lg={3} md={3} sm={3} xs={3} style={{display:'flex',flexDirection:'column'}}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selection}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Buy</MenuItem>
                    <MenuItem value={20}>Sell</MenuItem>
                  </Select>
                  </Grid> 
               <Grid item lg={5} md={5} sm={5} xs={5} style={{marginLeft:'30px'}} >
                    <Button variant="contained" color="secondary" onClick={handletrade}>
                        OK
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handlereset} style={{marginLeft:'20px'}}>
                        Reset
                    </Button>
               </Grid>  
            </Grid>
          </Grid>
      </Grid>
    
    </Grid>
  </>
  );
}

export default App;
