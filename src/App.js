import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "routes/Routing";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "context/auth.ctx";
import ChatDataContextProvider from "context/chatData.ctx";
// import SocketContextProvider from "context/socket.ctx";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<AuthProvider>
				<ThemeProvider theme={theme}>
					<QueryClientProvider client={queryClient}>
						{/* <SocketContextProvider> */}
						<ChatDataContextProvider>
							<GlobalStyles />
							<RouterProvider router={router} />
						</ChatDataContextProvider>
						{/* </SocketContextProvider> */}
					</QueryClientProvider>
				</ThemeProvider>
			</AuthProvider>
		</>
	);
}

export default App;
