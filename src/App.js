import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from '@material-ui/core/CircularProgress';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import tiers from './data';
import CancelIcon from '@material-ui/icons/HighlightOffRounded';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Old.St Labs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    fontFamily: 'Poppins'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: 'Poppins'
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(12, 3, 4),
    fontFamily: 'Poppins'
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    fontFamily: 'Poppins',
  },
  footer: {
    fontFamily: 'Poppins',
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  name:{
    fontWeight: '700',
  },
  auth:{
    fontSize: '11px',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  size:{
    fontSize: '13px',
    fontWeight: '600',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  fonts:{
    margin: '20px 12px 0px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '20px',
    minHeight:'200px',
    maxHeight:'200px'
  },
  root: {
    width: 200,
  },
  cardHeight:{
    minHeight: '300px'
  }
}));


const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const config = {
  slots: [
    {
      id: "banner-ad",
      path: "/6355419/Travel/Europe/France/Paris",
      sizes: [[300, 250]]
    }
  ]
};

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  }
});

export default function Pricing() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const [price, setPrice] = React.useState(0);
  const [list, setList] = React.useState(tiers);
  const [selected, setSelected] = React.useState(null);
  const [hasMore, setHasMore] = React.useState(true);
  const [showAds, setShowAds] = React.useState(true);

  const handleChangeSort = (e) =>{
    let option = e.target.value
    let newList =[];
    
    switch(option){
      case 10: newList = list.sort((a, b)=>{return b.price - a.price});
               break;
      case 20: newList = list.sort((a, b)=>{return b.size - a.size});
               break;
      case 30: newList = list.sort((a, b)=>{return b.id - a.id});
              break;
      default: newList = list;      
    }

    setSelected(option);
    setList(newList);
  }
  const addData = () =>{
      setList(list.concat( [{
        id: list.length + 1,
        price: 4,
        name:'Helvetica',
        date: 'Jan 21',
        size: 22,
      },
      {
        id: list.length + 2,
        price: 2.5,
        name:'Consolas',
        date: 'Jan 21',
        size: 16,
      },
      {
        id: list.length + 3,
        price: 3.33,
        name:'Courier New',
        date: 'Jan 21',
        size: 18,
      },
    ]))
    
  }
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    if (list.length >= 30) {
      setHasMore(false)
    }
    setTimeout(addData, 1500);
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <span style={{fontWeight: '700', color: '#3f51b5'}}>Old.St</span>
            <span style={{fontWeight: '600', color: '#747474d4', fontStyle: 'italic' ,color: '#e1c60d'}}> Fonts</span>
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="lg" component="main" className={classes.heroContent} >
      <Grid container spacing={2} alignItems="flex-end" justifyContent="space-between" >
        <Grid item>
          <Typography component="" color="textPrimary">
            <span style={{fontWeight: '500' , fontSize: '17px'}}>{list.length} total fonts</span>
          </Typography>
          {/* <TextField id="filled-size-normal" label="Price" variant="outlined" type="number" value={price} onChange={handlePriceChange}/> */}
        </Grid>
        {/* <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Date</InputLabel>
            <Select
              value={selected}
              onChange={handleChangeSort}
              label="Date"
            >
              <MenuItem value={10}>Recent</MenuItem>
              <MenuItem value={20}>Week Ago</MenuItem>
              <MenuItem value={30}>Month</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
        {/* <Grid item >
        <div className={classes.root}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
            {value}px
            </Grid>
            <Grid item xs>
              <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
        </Grid> */}
        
        <Grid item >
          <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
            <Select
              value={selected}
              onChange={handleChangeSort}
              label="Sort By"
            >
              <MenuItem value={10}>Price</MenuItem>
              <MenuItem value={20}>Size</MenuItem>
              <MenuItem value={30}>Id</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
        
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <InfiniteScroll
          dataLength={list.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<div className='loader'><CircularProgress /></div>}
          scrollableTarget="scrollableDiv"
        >
        <Grid container spacing={5} alignItems="flex-end">
       
          { list.length > 0 && list.map((tier, index) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <div>
                  <div className={classes.fonts}>
                    <Typography  align="center" >
                      <span style={{fontSize: `${tier.size}px`, fontFamily:`${tier.name}`}}>The quick brown fox jumps over the Lazy dog.</span>
                    </Typography>
                    <Typography  align="center" >
                      <span style={{fontSize: `${tier.size}px`, fontFamily:`${tier.name}`}}>1 2 3 4 5 6 8 9 0</span>
                    </Typography>
                    <Typography  align="center" >
                      <span style={{fontSize: `${tier.size}px`, fontFamily:`${tier.name}`}}>(ノ・∀・)ノ  ̄_(ツ)_/ ̄,</span>
                    </Typography>
                    
                  </div>
                </div>
                
                
                <CardContent>
                  <ul className={classes.cardDesc}>
                    <div className='titleSize'>
                      <Typography className={classes.name} variant="subtitle1" align="left" key={tier.name}>
                        {tier.name}
                      </Typography>
                      <Typography className={classes.size} color="textSecondary" variant="subtitle2" align="left" key={tier.size}>
                        {tier.size}px
                      </Typography>
                    </div>                
                    
                    <Typography className={classes.auth} color="textSecondary" variant="subtitle2" align="left" key={tier.date}>
                      {tier.date}
                    </Typography>
                  </ul>
                  <div className={classes.cardPricing}>
                    <Typography component="" color="textPrimary">
                      <span style={{fontWeight: '600' , fontSize: '17px'}}>${tier.price}</span>
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                    >
                      <ShoppingCartOutlinedIcon/>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        
        </Grid>
        </InfiniteScroll>
        { !hasMore && <div className='end'>~ end of catalogue ~</div>}
      </Container>
      {/* Footer */}
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
        {
          list.length > 20 && 
          <Box mt={5}>
            <div className='ads' style={{display: !showAds && 'none'}}>
                <div className='ads-close' onClick={() => setShowAds(false)}><CancelIcon/></div>
              <img src='./pepsi.jpg' />
            </div>
          </Box>
        }
        
      </Container>
      {/* End footer */}
      </ThemeProvider>
    </React.Fragment>
  );
}