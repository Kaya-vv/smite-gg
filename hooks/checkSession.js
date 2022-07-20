import axios from "../pages/api/axios";
import React from "react";
import Cookies from "cookies";
import { getFetchUrl } from "../pages/api/requests";

async function checkSession(req, res) {
  const cookies = new Cookies(req, res);

  let session = cookies.get("session");
  let newId;
  if (session) {
    await testSession();
  } else {
    newId = await startSession();
  }

  async function testSession() {
    session = cookies.get("session");
    const request = getFetchUrl("testsession", session);
    const result = await axios.get(request, {});

    if (!result.data.includes("successful")) {
      newId = await startSession();
    } else {
      newId = session;
    }
  }

  async function startSession() {
    const request = getFetchUrl("createsession");

    const result = await axios.get(request, {});
    console.log(result);
    cookies.set("session", result.data.session_id);

    return result.data.session_id;
  }

  return newId;
}

export default checkSession;
