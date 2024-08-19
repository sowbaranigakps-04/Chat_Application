import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'; 
import LoginForm from './components/LoginForm'
import './App.css';


const App =  () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="83613c3b-397a-4bd4-a528-c575ed4c1e0c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')} 
            renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
        />
    );
}

export default App;