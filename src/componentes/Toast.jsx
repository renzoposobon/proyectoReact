import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {

  const notify = () => {
    toast("┬íProducto agregado!");
  };

  return (
    <>
        <button onClick={notify} className='btn text-xl text-white bg-black'>BTN</button>
        <ToastContainer />
    </>
  )
}

export default Toast
