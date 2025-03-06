

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/chi siamo" Component={aboutUs} />
          <Route path="/posts list" Component={postlist} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      
      
      
    </>
  )
}

export default App
