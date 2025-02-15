import axios from "axios";


const BASEURL = "https://bookstore.incubation.bridgelabz.com/bookstore_user"


export async function createUser(userObj:object,navigate:Function){
  await axios.post(`${BASEURL}/registration`,userObj).then(res => {
    const usertoken = res.data.result.accessToken
    localStorage.setItem("accessToken",usertoken)
    navigate("/book")
      }).catch(err => {
          const error = err.response.data.error
          console.log(error);
          
        });
      }

      export async function Login(userObj:object,navigate:Function){
        await axios.post(`${BASEURL}/login`,userObj).then(res => {
          const usertoken = res.data.result.accessToken
          localStorage.setItem("accessToken",usertoken)
          navigate("/book")
            }).catch(err => {
                const error = err.response.data.error
                console.log(error);
                
              });
            }