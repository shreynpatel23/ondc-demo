import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="dropdown_area d-flex align-items-center px-4">
        <div class="dropdown show">
          <a
            class="btn btn-secondary dropdown-toggle"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
