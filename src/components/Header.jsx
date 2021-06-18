import styles from "./Header.module.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";


export function Header({ backButton }) {
    const history = useHistory();
  return (
    <div className={styles.header}>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className={styles.header_icon} />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className={styles.header_icon} />
        </IconButton>
      )}

      <Link to="/">
        <WhatshotIcon
          fontSize="large"
          color="secondary"
          className={styles.header_logo}
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className={styles.header_icon} />
        </IconButton>
      </Link>
    </div>
  );
}
