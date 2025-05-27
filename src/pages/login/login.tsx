function Login() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
      padding: "2rem",
      minHeight: "100vh",
      width: "100vw",
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "#f5f5f5"
    }}>
      <div style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#333"
      }}>
        Login Page
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        maxWidth: "300px",
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center"
        }}>
          <label style={{
            fontSize: "1rem",
            fontWeight: "500",
            width: "100%",
            textAlign: "left"
          }}>
            UserName
          </label>
          <input 
             placeholder="UserName"
            type="text"
            style={{
              padding: "0.75rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "100%",
              fontSize: "1rem"
            }}
          />
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center"
        }}>
          <label style={{
            fontSize: "1rem",
            fontWeight: "500",
            width: "100%",
            textAlign: "left"
          }}>
            Password
          </label>
          <input 
            placeholder="Password"
            type="password"
            style={{
              padding: "0.75rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "100%",
              fontSize: "1rem"
            }}
          />
          <button>Log In</button>
          <div style={{display:"flex",gap:"10px"}}>
          <label htmlFor="remember-me">Remember Me</label>
          <input id="remember-me" type="checkbox"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login