

export function sendEmail({ name, email, inquery, message, incomplete }) {

  const ready = !incomplete;

  return (
      ready?
          <a
          type="submit"
          target="_blank"
          rel="noreferrer"
          href={`mailto:osharpe001@gmail.com?subject=${name} is interested in sharing a ${inquery} with you.&body=${message}... \n${name}'s email is ${email}.`}
          >
              Set Up Email
          </a>
      :
          <>Please Fill Out Form</>
  );
};