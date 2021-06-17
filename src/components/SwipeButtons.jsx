import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import styles from "./SwipeButtons.module.css";
import IconButton from "@material-ui/core/IconButton";

export function SwipeButtons() {
  return (
    <div className={styles.swipeButtons}>

      <IconButton className={styles.swipeButtonS_repeat}>
        <ReplayIcon fontSize='large' />
      </IconButton>

      <IconButton className={styles.swipeButtonS_left}>
        <CloseIcon fontSize='large'/>
      </IconButton>

      <IconButton className={styles.swipeButtonS_star}>
        <StarRateIcon fontSize='large'/>
      </IconButton>

      <IconButton className={styles.swipeButtonS_right}>
        <FavoriteIcon fontSize='large' />
      </IconButton>

      <IconButton className={styles.swipeButtonS_lightning}>
        <FlashOnIcon fontSize='large' />
      </IconButton>

    </div>
  );
}
