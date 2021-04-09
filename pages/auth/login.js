import { getCsrfToken } from 'next-auth/client'

export default function SignIn({ csrfToken }) {
  return (
    <form method='post' action='/api/auth/signin/email'>
      <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
      <label>
        Email address
        <input type='email' id='email' name='email'/>
      </label>
      <button type='submit'>Sign in with Email</button>
    </form>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context){
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}
