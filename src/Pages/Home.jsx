import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
function Home() {
  const navigate = useNavigate()

  const buttonStyles = {
    color: 'white',
    backgroundColor: '#713fff',
    borderRadius: '14px',
    fontWeight: 600,
    fontSize: '16px',
    boxShadow: '0 6px 12px rgba(113,63,255,.25)',
  }

  const signUpButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#00cc66',
  }
  return (
    <div className=" flex m-4  justify-between">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">TODOS</h1>
      <div className=" flex gap-3">
        <Button
          onClick={() => navigate('Signin')}
          style={buttonStyles}
          size="large"
          variant="outlined"
        >
          Login
        </Button>
        <Button
          onClick={() => navigate('Signup')}
          style={signUpButtonStyles}
          size="large"
          variant="outlined"
        >
          Create Account
        </Button>
      </div>
    </div>
  )
}
export default Home
