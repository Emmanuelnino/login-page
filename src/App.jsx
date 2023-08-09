import Form from './components/Form';
import './App.css'



function App() {


  return (
    <div className='flex w-full h-screen'>
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Form />
      </div>

      <div className='hidden lg:flex h-full items-center justify-center bg-gray-200'>
    <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full"/>
      </div>
    </div>
  );
}

export default App
