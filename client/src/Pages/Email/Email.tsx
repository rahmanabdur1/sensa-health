import styles from './Email.module.css';
import bean from '../../assets/images/bean_email.jpg'
export function Email() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <label >Enter your email</label>
                <input type='email' name='email' placeholder='Email*' />
                <button>See my results</button>
                <p>By providing your email, you agree that Sensa.health will process your email address for target advertising purpose and will share your email address with social media, advertising and newsletters platforms as described in our T&Cs and Privacy Policy. We respect your privacy and do not tolerate spam. We will never share or sell your information to third parties.</p>
            </div>
            <div className={styles.img}>
                <img src={bean} alt='/bean_img' />
            </div>
        </div>
    );
};

