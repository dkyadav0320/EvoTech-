import './App.css';
import axios from "axios";
<script type="text/babel">
function App() 
  const [name, setName]= useState("");
    const [gender, setGender]= useState("");
    const [nationality, setNationality]= useState("");
    const [email, setEmail]= useState("");
    const [phoneNumber, setPhoneNumber]= useState("");
    const [message, setMessage]= useState("");

    useEffect (() = (
        axios.get("http://localhost:5000/api/surveys").then(response = setSurveys(response.data))
        .catch(error = console.error(error));
    ,) []);

    const handleSubmit = () = {
        axios.post("http://localhost:5000/api/surveys", {name, gender, nationality, email, phoneNumber, address, message})
        .then(response => {
            console.log(response.data);
            setSurveys([surveys, {name, gender, nationality, email, phoneNumber, address, message}]);
        })
            .catch(error=> console.error(error))};
        
    ;
        return (
            <>
            <div>
                <h1>Survey Form Submission Application</h1>
                <div>
                    <h2>Create a New Survey</h2>

                    <label>Name:</label>
                    <input type="text" value={name} onChange= {(e) => setName(e.target.value)} />
                    <br />
                    <input type="text" value={gender} onChange= {(e) => setGender(e.target.value)} />
                    <br />
                    <input type="text" value={nationality} onChange= {(e) => setNationality(e.target.value)} />
                    <br />
                    <input type="text" value={email} onChange= {(e) => setEmail(e.target.value)} />
                    <br />
                    <input type="text" value={phoneNumber} onChange= {(e) => setPhoneNumber(e.target.value)} />
                    <br />
                    <input type="text" value={address} onChange= {(e) => setAddress(e.target.value)} />
                    <br />
                    <input type="text" value={message} onChange= {(e) => setMessage(e.target.value)} />
                </div>

                <button onClick={handleSubmit}>Submit Survey</button>
            </div>
            <hr />
            <div>
            <h2>Surveys</h2>
            <ul>
                {surveys.map((survey,index) => (
                    <li key={index}>
                        <strong>{survey.name}</strong>
                        <ul>
                           {survey.map(survey,index)= (
                                <li key ={index}>
                                   <strong>{survey.gender}</strong>
                                </li>
                                
                            )}
                                { survey.map(survey,index)= (
                                <li key ={index}>
                                   <strong>{survey.nationality}</strong>
                                </li>
                                
                            )}
                                 {survey.map(survey,index)= (
                                <li key ={index}>
                                   <strong>{survey.email}</strong>
                                </li>
                                
                            )}
                                {survey.map(survey,index)= (
                                <li key ={index}>
                                   <strong>{survey.phoneNumber}</strong>
                                </li>
                                
                            )}
                                 {survey.map(survey,index)= (
                                <li key ={index}>
                                   <strong>{survey.address}</strong>
                                </li>
                                
                            )}
                               {survey.map(survey,index)= (
                                <li key ={index}>
                                   <strong>{survey.message}</strong>
                                </li>
                                
                            )}
                        </ul>
                    </li>
                    
                ))}
            </ul>
            </div>            
        </>
        )
   
                               
const rootElement=ReactDom.createRoot(document.getElementById("root"));
rootElement.render(<App />)
</script>
export default App;
