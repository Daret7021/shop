import React from 'react';

function Footer() {
  return (
    <footer id="contact">
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </footer>
  );
}

export default Footer;
