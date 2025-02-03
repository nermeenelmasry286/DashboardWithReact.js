import React from 'react';
import styles from '../styles/loginForm.module.css';

export function Login({ handleInputChange, handleLogin }) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Sign In</div>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          required
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={handleInputChange}
        />
        <input
          required
          className={styles.input}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <span className={styles.forgotPassword}>
          <a href="#">Forgot Password?</a>
        </span>
        <input className={styles.loginButton} type="submit" value="Sign In" />
      </form>
      <div className={styles.socialAccountContainer}>
        <span className={styles.title}>Or Sign in with</span>
        <div className={styles.socialAccounts}>
          <button className={`${styles.socialButton} ${styles.google}`}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
          </button>
          <button className={`${styles.socialButton} ${styles.apple}`}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;


