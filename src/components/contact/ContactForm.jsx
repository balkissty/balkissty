import { useState } from "react";
import { database } from "../../firebase";
import { ref, push, child, update } from "firebase/database";

const ContactForm = () => {
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setFullName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "subject") {
      setSubject(value);
    }
    if (id === "message") {
      setMessage(value);
    }
  };


  const handleSubmit = (e) => {
	e.preventDefault()
    let obj = {
      fullName: fullName,
      email: email,
      subject: subject,
      message: message,
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    console.log(fullName)
    setEmail('')
    setFullName('')
    setMessage('')
    setSubject('')
      return update(ref(database), updates);
    
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              aria-label="Name"
              value={fullName || ""}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              aria-label="Email"
              value={email || ""}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-1"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
              value={subject || ""}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              value={message || ""}
              onChange={(e) => handleInputChange(e)}
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <button
              type="submit"
              aria-label="Send Message"
              onClick={handleSubmit}
            >Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
