import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Abuja, Nigeria',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'ogundotunbalkiss@gmail.com',
		icon: <FiMail />,
	}
];

const ContactDetails = () => {
	return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact details
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex " key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span className="text-lg mb-6 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
        <div>
          <article className="text-lg text-ternary-dark dark:text-ternary-light">
            Please feel free to reach out to me for inquiries, feedback,
            potential collaborations, and hiring opportunities. Whether you have
            questions about my work, suggestions on how we can work together, or
            if you're interested in discussing potential projects or employment,
            I'm eager to engage in meaningful conversations with you.
          </article>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
