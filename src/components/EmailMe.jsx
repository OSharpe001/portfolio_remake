export function sendEmail({ name, email, inquery, message }) {

  const ready = !!name && !!email && !!inquery && message.length > 8;

  return (
      ready?
          <a
          target="_blank"
          rel="noreferrer"
        //   href={'mailto:osharpe001@gmail.com?subject='+name+' is interested in sharing a '+inquery+' with you.&body='+message+"... \n"+name+"'s email is "+email+'.'}
          href={`mailto:osharpe001@gmail.com?subject=${name} is interested in sharing a ${inquery} with you.&body=${message}... \n${name}'s email is ${email}.`}
          >
              Send Email
          </a>
      :
          <p>Please Fill Out Form</p>
  )
}