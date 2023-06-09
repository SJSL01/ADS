import { useEffect } from "react"
import "./style.css"
import axios from "axios"

function App() {


  useEffect(() => {

  

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_URL}/v1/domains/snaplogic-sandbox.skilljar.com/users`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${window.btoa(import.meta.env.VITE_KEY)}`
      },
      data: {
        "user": {
          "email": "dynamic@example.com",
          "first_name": "bob111",
          "last_name": "User"
        }
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      }) .catch((error) => {
          console.log(error);
        });
  }, [])



  return (

    <>


      <header>

        <nav>
          <h1>DUMMY</h1>
          <ul>
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>CONTACT</li>
          </ul>
        </nav>

      </header>


      <main>

        <div>
          content
        </div>
        <div>
          content
        </div>
        <div>
          content
        </div>
        <div>
          content
        </div>

      </main>


      <footer>
        <div>dummy</div>
        <div>dummy</div>
        <div>dummy</div>
        <div>dummy</div>
        <div>dummy</div>
        <div>dummy</div>
      </footer>



    </>
  )
}

export default App
