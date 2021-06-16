
import  styles from "./Header.module.css";
import WhatshotIcon from '@material-ui/icons/Whatshot'; 
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

export function Header() {

    return (
        <div className={styles.header} >
           
            <IconButton>
            
                <PersonIcon fontSize='large' className = {styles.header_icon} />

            </IconButton>

            <WhatshotIcon fontSize = 'large' color = 'secondary' className ={styles.header_logo}/>

            <IconButton>
            <ForumIcon fontSize='large' className = {styles.header_icon}/>
            </IconButton>
            
            
        </div>
    );
}


