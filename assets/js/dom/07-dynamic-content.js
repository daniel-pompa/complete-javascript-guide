//* Generate HTML dinamically with JavaScript
// This script generates an HTML element based on the email and password input values

document.addEventListener('DOMContentLoaded', () => {
  // Select and configure all 'a' elements with predefined link data
  const links = document.querySelectorAll('a');
  const linkData = [
    { text: 'MongoDB', url: 'https://www.mongodb.com/docs/' },
    { text: 'Express', url: 'https://expressjs.com/' },
    { text: 'React', url: 'https://es.react.dev/' },
    { text: 'NodeJS', url: 'https://nodejs.org/en' },
  ];

  // Update 'a' elements with text and URLs from linkData
  links.forEach((link, index) => {
    if (linkData[index]) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = linkData[index].text;
      link.href = linkData[index].url;
    }
  });

  const form = document.querySelector('#form');
  const generatedContent = document.querySelector('#dynamic-content');

  // Validate e-mail format
  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /**
   * Handles the form submit event.
   * @param {Event} e - The form submit event.
   */
  const handleFormSubmit = e => {
    // Prevent the default form submission behavior
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Remove previous alert message if exists
    removePreviousAlert();

    // Create and display alert message based on form input
    const alertMessage = createAlertMessage(email, password);
    form.appendChild(alertMessage);

    // If form submission is successful, reset form and create dynamic content
    if (alertMessage.classList.contains('success')) {
      form.reset();
      createDynamicContent(email, password);
    }

    // Remove alert message after 2 seconds
    setTimeout(() => alertMessage.remove(), 2000);
  };

  // Remove the previous alert message if it exists
  const removePreviousAlert = () => {
    const previousAlert = document.querySelector('.alert');
    if (previousAlert) previousAlert.remove();
  };

  /**
   * Creates an alert message based on the provided email and password.
   * @param {string} email - The email entered in the form.
   * @param {string} password - The password entered in the form.
   * @returns {HTMLDivElement} - The alert message element.
   */
  const createAlertMessage = (email, password) => {
    const alert = document.createElement('div');
    alert.className = 'alert';
    alert.style.cssText = `
    font-size: calc(1rem + 0.5vw);
    text-align: center;
    width: 100%;
    margin: 20px 0;
    padding: 15px 20px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  `;

    /**
     * Set the alert message text and type.
     * @param {string} text - The text to display in the alert.
     * @param {string} type - The type of alert.
     */
    const setAlert = (text, type) => {
      alert.textContent = text;
      alert.className = 'alert';
      alert.classList.add(type);
    };

    if (!email || !password) {
      setAlert('All fields are required', 'error');
    } else if (!validateEmail(email)) {
      setAlert('Invalid email format', 'error');
    } else {
      setAlert('Form submitted successfully', 'success');
    }

    return alert;
  };

  /**
   * Create dynamic content based on the provided email and password
   * @param {string} email - The email entered in the form
   * @param {string} password - The password entered in the form
   */
  const createDynamicContent = (email, password) => {
    const container = document.createElement('div');
    container.className = 'dynamic-container';
    container.style.cssText = `
      width: 100%;
      margin: 10px 0;
      padding: 10px 20px;
      background-color: rgba(255, 255, 255, 0.6);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
    `;

    const title = document.createElement('h3');
    title.innerText = 'Form data';
    title.style.fontSize = 'calc(1.5rem + 0.5vw)';

    const emailParagraph = document.createElement('p');
    emailParagraph.style.textAlign = 'left';
    emailParagraph.innerHTML = `<strong>Email address:</strong> ${email}`;

    const passwordParagraph = document.createElement('p');
    passwordParagraph.style.textAlign = 'left';
    passwordParagraph.innerHTML = `<strong>Password:</strong> ${password}`;

    container.append(title, emailParagraph, passwordParagraph);
    generatedContent.appendChild(container);
  };

  // Add a submit event listener to the form
  form.addEventListener('submit', handleFormSubmit);
});
