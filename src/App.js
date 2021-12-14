import React, { useState, useRef } from "react";
import "./App.css";
import { listOfSupportedApis } from "./constants/listOfSupportedApis";
import axios from "axios";

function App() {
  const [selectedApi, setSelectedApi] = useState();
  const [params, setParams] = useState();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  const [statusCode, setStatusCode] = useState();
  const formRef = useRef();
  function resetMyForm() {
    formRef?.current?.reset();
  }
  async function handleApiHiy() {
    setLoading(true);
    try {
      const { data, status } = await axios.post(
        selectedApi.api_endpoint,
        params
      );
      setStatusCode(status);
      setParams(null);
      setResponse(data);
    } catch (err) {
      const { data, status } = err.response;
      setStatusCode(status);
      setResponse(data);
    } finally {
      setLoading(false);
      resetMyForm();
    }
  }
  return (
    <div className="background">
      <div className="d-flex align-items-start px-4">
        {/* DROPDOWN AREA */}
        <div style={{ flexBasis: "15%" }} className="p-4">
          <div className="dropdown show">
            <p
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {selectedApi ? selectedApi.api_name : "Select an option"}
            </p>
            {/* LIST OP APIS HERE  */}
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {listOfSupportedApis.map((api) => {
                return (
                  <p
                    style={{ cursor: "pointer" }}
                    className="dropdown-item mb-0"
                    key={api.api_name}
                    onClick={() => {
                      setSelectedApi(api);
                      setParams(null);
                      setResponse();
                      setStatusCode();
                      resetMyForm();
                    }}
                  >
                    {api.api_name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        {/* PARAMS AREA */}
        {selectedApi && (
          <div style={{ flexBasis: "85%" }}>
            <div style={{ width: "600px" }} className="p-4">
              <form ref={formRef}>
                <h3>{selectedApi?.api_name}</h3>
                {/* LIST OF PARAMS HERE  */}
                {selectedApi?.params.map((param, index) => {
                  return (
                    <div className="form-group py-2" key={index}>
                      <label htmlFor={param.param_name}>
                        {param.param_name}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        id={param.param_name}
                        placeholder={`Enter ${param.param_name}`}
                        onChange={(event) => {
                          setParams((params) => ({
                            ...params,
                            [param.param_name]: event.target.value,
                          }));
                        }}
                      />
                    </div>
                  );
                })}
                <div className="py-2 d-flex align-items-center">
                  <div className="pr-2">
                    <button
                      className="btn btn-secondary"
                      disabled={loading}
                      onClick={() => {
                        setParams(null);
                        setSelectedApi("");
                        setResponse();
                        setStatusCode();
                        resetMyForm();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="px-3">
                    <button
                      className="btn btn-success"
                      disabled={loading || !params}
                      onClick={handleApiHiy}
                    >
                      Hit Me
                    </button>
                  </div>
                </div>
              </form>
              {response && <hr />}
              {loading ? (
                <div className="spinner-border" role="status"></div>
              ) : (
                response &&
                statusCode && (
                  <div className="py-3">
                    <div className="d-flex align-items-center pb-3">
                      <div className="mr-2">
                        <p className="mb-0 font-weight-bold">Status Code:</p>
                      </div>
                      <div className="px-2">
                        <p className="mb-0">{statusCode}</p>
                      </div>
                    </div>
                    <pre>
                      <code>{JSON.stringify(response, null, 4)}</code>
                    </pre>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
