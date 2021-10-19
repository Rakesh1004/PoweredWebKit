import React, { useState, useEffect } from "react";
import "./Notes.css";
// eslint-disable-next-line
import Web3 from "web3";
import TodoList from "../../contracts/TodoList.json";
import getWeb3 from "../../../src/getWeb3";
const Notes = () => {
  const [account, setAccount] = useState(undefined);
  const [todos, setTodos] = useState([]);
  const [newnote, setNewnote] = useState("");
  
  const [web3, setWeb3] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);


  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        setWeb3(web3);
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        console.log(accounts[0]);
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        console.log(networkId);
        const deployedNetwork = TodoList.networks[networkId];
        console.log(deployedNetwork);

        const instance = new web3.eth.Contract(
          TodoList.abi,
          deployedNetwork && deployedNetwork.address
        );
        console.log(instance);
        setContract(instance);

     
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    };
    getData();

   
  },[]);


useEffect(()=>{

  //  console.log(account)
  //  console.log(contract)
  //  console.log(web3)
   const getTodo = async () => {
     await contract.methods
       .taskCount()
       .call()
       .then(async (response) => {
         console.log(response);

         for (let i = 1; i <= response; i++) {
           await contract.methods
             .tasks(i)
             .call()
             .then((data) => {

               console.log(data);
               var tasks = todos
               
               tasks.push({
                 content: data.content,
                 id: data.id,
                 completed: data.completed,
               });

              //  tasks.push({
              //      content: data.content,
              //      id: data.id,
              //      completed: data.completed,
              //    })

                 console.log(tasks)
                 setTodos(tasks)


                // console.log(todos)
              //  console.log(loading);
               
             })
           
             .catch((err) => console.log(err));
         }
       })
       .then(()=>{
         setLoading(false)
       })
       .catch((err) => {
         console.log(err);
       });
   
    
   };

  
    if (
      typeof web3 != "undefined" &&
      typeof contract != "undefined" &&
      typeof account != "undefined"
    ) {
      getTodo();

     
    }

console.log(todos)
},[web3,contract,account,todos])


  const handleToggle = async (id) => {
    // e.preventDefault()
    setChecked(!checked);
    console.log("basic toggle");

    await contract.methods
      .toggleTask(id)
      .send({ from: account })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
 
    e.preventDefault();
    console.log(account);
    console.log(newnote);
    console.log("submit button");
    await contract.methods
      .createTask(newnote)
      .send({ from: account })
      .then((res) => {
        console.log(res);
      })
      .then(()=>{
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };



  if (!web3) {
    return <>Loading Web3, accounts, and contract...</>;
  } 
  else {
    return (
      <div className="notes-section">
        <div className="pending">
          <div className="creation">
            <h1>CREATE A NEW NOTE:</h1>
            <form>
              <input
                type="text"
                className="form-bar"
                value={newnote}
                onChange={(e) => {
                  setNewnote(e.target.value);
                }}
              ></input>
            </form>
            <button
              type="submit"
              onClick={handleSubmit}
              className="notes-submit"
            >
              ADD
            </button>
          </div>

          <div className="your-notes">
            <h1>YOUR INCOMPLETE NOTES:</h1>
            {console.log(todos)}
            {console.log(loading)}
            {!loading && todos
              ? todos.map((todo) => {
                  return (
                    <div className="display-notes" key={todo.id}>
                      <div className="note">
                        <div>
                          {todo.id}.{todo.content}
                        </div>{" "}
                        <input
                          checked={todo.completed ? true : false}
                          type="checkbox"
                          className="checkbox"
                          onChange={() => handleToggle(todo.id)}
                        ></input>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>

        <div className="completed">
          <div className="completed-notes-inner">
            <h1>YOUR COMPLETED NOTES:</h1>

            <div className="completed-notes-display">
              {!loading && todos
                ? // eslint-disable-next-line
                  todos.map((todo) => {
                    if (todo.completed) {
                      return (
                        <div key={todo.id}>
                          {todo.content} <br />
                        </div>
                      );
                    }
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Notes;
