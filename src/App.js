import { Provider } from 'react-redux';
import store from './redux/store';
import ChatbotContainer from './ui/chatbot/chatbotContainer';
import  {v4 as uuidv4} from 'uuid';

function App() {
    const sessionId = uuidv4();
    return (
        <Provider store={store}>
            <ChatbotContainer sessionId={sessionId} />
        </Provider>
    );
}

export default App;
