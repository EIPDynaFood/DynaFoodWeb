import axios from "axios";

const refreshToken = localStorage.getItem("refresh_token")
let lastExecutionTime = 0;
export default async function APIRoute(callbackRoute) {
    
        callbackRoute().catch((err) => {
            if (err.response.status === 401) {
                const currentTime = Date.now();
                if (currentTime - lastExecutionTime >= 5000) {
                    lastExecutionTime = currentTime;
                    axios.get("http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/" + "refresh?refresh_token=" + refreshToken)
                        .then((res) => {
                                localStorage.setItem('token', res.data["token"])
                                localStorage.setItem('refresh_token', res.data["refresh_token"])
                                APIRoute(callbackRoute);
                            }
                        ).catch((err) => console.log("refresh-error: " + err))
                } else {
                    callbackRoute().catch((err) => {
                        if (err.response.status === 401) {
                            APIRoute(callbackRoute)
                        }
                    })
                }
            }}).catch()
}