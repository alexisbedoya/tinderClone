import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import  "./SwipeButtons.css";

export function SwipeButtons() {
  return (
    <div className= 'swipeButtons' >
        {//rewids regresar 
        }

      <IconButton className= 'swipeButtons_repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
        {
          //unlike
        }
      <IconButton className='swipeButtons_left'>
        <CloseIcon fontSize='large'/>
      </IconButton>
        {
          // like
        }
      <IconButton className='swipeButtons_star'>
        <StarRateIcon fontSize='large'/>
      </IconButton>
        {
          // super like
        }
      <IconButton className='swipeButtons_right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
        {
          // destacado
        }
      <IconButton className='swipeButtons_lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>

    </div>
  );
}
