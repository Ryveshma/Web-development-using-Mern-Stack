import { useState } from "react";
import "./profile.css"
function Profile(){
    let [theme,setTheme] = useState({
        bgColor:"white",
        textColor:"black",
    });

    let [name, setName] = useState("Ryveshma");
    let [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7SrG1bjNMjCwGKPk5MC0awmMZ3as1BzrhEc_dZoG_LktvlRO_QdnS_lgvQfSfapedchc&usqp=CAU")
    const changeTheme = (event)=>{
        if(event.target.checked){
            setTheme({
                bgColor:"black",
                textColor:"white",
            });
        }
        else{
            setTheme({
                bgColor:"white",
                textColor:"black",
            });
        }
    }
    const changeToRyveshma = ()=>{
        setName("Ryveshma");
        setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7SrG1bjNMjCwGKPk5MC0awmMZ3as1BzrhEc_dZoG_LktvlRO_QdnS_lgvQfSfapedchc&usqp=CAU")
    }
    const changeToSonal = ()=>{
        setName("Sonal");
        setImage("https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1")
    }
    return(
        <div class="sty">
            <div class="column1">
                <img src={image} width="100%" height={430}/>
            </div>
            <div class="column2" style={{backgroundColor: theme.bgColor, color: theme.textColor}}>
            <dl>
            <dt>User name</dt>
            <dd>{name}</dd>
            <dt>City</dt>
            <dd>Hyderabad</dd>
            <dt>EmailId</dt>
            <dd>@gmail.com</dd>
            <dt>Description</dt>
            <dd>qwertyuhcbjygshuilcjkaxop,iejmchsbjhvbfdbgkcjfsjkls nkdjhbxdsgjbl</dd>
            </dl>

            <button onClick={changeToRyveshma}>Ryveshma</button>
            <button onClick={changeToSonal}>Sonal</button><br></br>
            <input type="checkbox" className="mx-2" onChange={changeTheme}/>check to switch dark mode
            </div>
            
            </div>
    );
}
export default Profile;