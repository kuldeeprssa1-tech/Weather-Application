import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';




export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const RAIN_URL="https://images.unsplash.com/photo-1705077564892-4d0560b1f4a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
  
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
           ? RAIN_URL  
           : info.temp>15 
           ? HOT_URL
            :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {
             info.humidity>80
            ?  <ThunderstormOutlinedIcon/> 
           : info.temp > 15 
           ? <WbSunnyOutlinedIcon/>
            :<AcUnitIcon/>}
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}  component="span">
          <div>Temperature={info.temp}&deg;C</div>
          <div>humidity={info.humidity}</div>
          <p>Min Temp ={info.tempMin}&deg;C</p>
          <p>Max Temp ={info.tempMax}&deg;C</p>
          <p>feelsLike ={info.feelsLike}&deg;C</p>
          <p>The Weather can be describe as & <i style={{
            color:
            info.humidity > 80
             ? "blue"
             : info.temp>15 
             ? "red" 
             : "skyBlue", 
             fontSize:"20px"}}
             >{info.weather}</i> and feels like{info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
    </div>

        </div>
    )
}