import React from 'react';
import { styled } from '@mui/system';
import { Button, Box,TextField, Paper, Typography, IconButton, Grid, List, ListItem, ListItemText, ListItemIcon, Tooltip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '@mui/material/Modal';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NoteIcon from '@mui/icons-material/Note';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TelegramIcon from '@mui/icons-material/Telegram';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



// 

// Define some styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f2f2f2',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  textAlign: 'center',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  color: '#333',
  marginBottom: theme.spacing(1),
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  opacity:0.5,
  color: 'black',
  letterSpacing:3,
textDecorationColor:'black',
textDecorationStyle:'solid',
textDecorationThickness:'3px',
padding:'2rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  color: '#fff',
  borderRadius: theme.spacing(5),
  padding: theme.spacing(3, 5),
  transition: 'all 0.3s ease',

  '&:hover': {
    backgroundColor: 'gray',
    color:'black'
  },
}));

// Define the component
const TodoForm = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('female');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function MouseOver(event) {
    event.target.style.background = 'gray';
    event.target.style.color = 'white';
  }
  function MouseOut(event){
    event.target.style.background="black";
    event.target.style.color = "white";
  }
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue((event.target as HTMLInputElement).value);
  // };

  return (

    <StyledPaper style={{  backgroundColor: '#f2f2f2',
  }}>
     <div>
      <Button onMouseOver={MouseOver} onMouseOut={MouseOut} style={{backgroundColor:'black', borderRadius:'30px', marginTop:"5vh", marginBottom:'5vh'}}  variant="contained"  onClick={handleOpen}>
        Open My Modal
      </Button>
      <Modal style={{backgroundColor:'gray'}}
        open={open}
        onClose={handleClose}
      
      >
        <div>
          <h2 style={{color:"white" ,display:'flex',textAlign:'center',justifyContent:'center'}}>WelCome to My TodoForm
          </h2>
        </div>
      </Modal>
    </div>
      
     
      <div style={{display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    }}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="./im-500197.jpg"
        />
        <CardContent>
          <Typography  variant="h5" component="div">
            Adidas Shop
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, laborum quisquam doloribus voluptatibus provident sed, eligendi repellat odit minima expedita, accusantium ducimus esse aliquam quae! Officia cumque impedit quis corporis?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="./576876641500002a0073b967.jpeg"
        />
        <CardContent>
          <Typography  variant="h5" component="div">
          Do Housework
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt adipisci laudantium corrupti assumenda maiores earum laboriosam in obcaecati hic esse aliquid nam consequatur praesentium, suscipit expedita eius quod soluta aspernatur?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="./how to use past exam papers.webp"
        />
        <CardContent>
          <Typography  variant="h5" component="div">
          Do Practice

          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam nemo hic temporibus est nobis velit deleniti, officia praesentium iusto consectetur dolorem repudiandae. Facere necessitatibus autem velit quo magnam ad.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
       
      <Grid container spacing={5}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
        <KeyboardDoubleArrowDownIcon/>
          <StyledDescription variant="">This is a list of TodoForm of Today</StyledDescription>
          <KeyboardDoubleArrowDownIcon/>

        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItem>
              <Tooltip title="Adidas shop">
                <ListItemIcon>
                  <AddShoppingCartIcon style={{opacity:0.6}} />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary="Go shop" />
            </ListItem>
            <ListItem>
              <Tooltip title="Clean bedroom">
                <ListItemIcon>
                  <BedroomChildIcon  style={{opacity:0.6}}/>
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary="Do housework" />
            </ListItem>
            <ListItem>
              <Tooltip title="My TodoForm">
                <ListItemIcon>
                  <NoteIcon style={{opacity:0.6}}/>
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary="Do practice" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <StyledButton variant="contained">Add More Todo</StyledButton>
        </Grid>
      </Grid>
      <Box
        style={{ marginTop:'5vh' , marginBottom:'5vh'}}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "80vh" },
        }}
      >
        <h3 style={{opacity:'0.5'}}>
        You can suggest me what to do...
        <IconButton  color="black">
          !
            <AssignmentIcon style={{width:"35px",height:"25px"}}  />
          </IconButton>
        </h3>
        <div>
          <TextField
            required
            label="Your Suggest"
            defaultValue="Write it here"
          />
        </div>
        <FormControl >
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
       
      </RadioGroup>
    </FormControl>
       
        <div>
          <Button onMouseOver={MouseOver} onMouseOut={MouseOut}  style={{marginTop:'2vh',marginBottom:'2vh', border:'2px solid black', borderRadius:'30px', backgroundColor:'black', color:'white' }}>
            Submit
          </Button>
        </div>
        <Grid item>
          <Tooltip disableFocusListener title="Sent">
           <IconButton    color="black">
          <SendIcon  style={{width:"25px",height:"25px"}}/>
          </IconButton>
          </Tooltip>
          <Tooltip disableFocusListener title="Register Now">
           <IconButton    color="black">
          <HowToRegIcon  style={{width:"45px",height:"32px"}}/>
          </IconButton>
          </Tooltip>
            <Tooltip disableFocusListener title="Join Us">
            <IconButton    color="black">
            <TelegramIcon  style={{width:"32px",height:"32px"}}/>
            </IconButton>
            </Tooltip>
            <Badge style={{marginLeft:'10px'}} badgeContent={4} color="secondary">
               <MailIcon color="action" style={{width:"25px",height:"25px"}} />
            </Badge>
        </Grid>
          
      </Box>
    </StyledPaper>
     
  );
};

// Export the component
export default TodoForm;