import axios from "../pages/api/axios";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { getFetchUrl } from "../pages/api/requests";

function useSmite() {
  const cookies = new Cookies();
  useEffect(() => {
    const session = cookies.get("session");
    if (session) {
      async function testSession() {
        const request = getFetchUrl("testsession", session);
        const result = await axios.get(request);
        if (!result.data.includes("successful")) {
          startSession();
        }
        return axios;
      }
      testSession();
    } else {
      startSession();
    }

    async function startSession() {
      const request = getFetchUrl("createsession");
      const result = await axios.get(request);
      cookies.set("session", result.data.session_id);

      return axios;
    }
  }, []);

  return axios;
}

export default useSmite;
