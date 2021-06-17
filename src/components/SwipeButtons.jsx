import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import  "./SwipeButton.css";

export function SwipeButtons() {
  return (
    <div className= 'swipeButtons' >

      <IconButton className= 'swipeButtons_repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>

      <IconButton className='swipeButtons_left'>
        <CloseIcon fontSize='large'/>
      </IconButton>

      <IconButton className='swipeButtons_star'>
        <StarRateIcon fontSize='large'/>
      </IconButton>

      <IconButton className='swipeButtons_right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>

      <IconButton className='swipeButtons_lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>

    </div>
  );
}
