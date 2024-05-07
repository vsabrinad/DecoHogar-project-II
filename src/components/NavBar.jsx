import { useState } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (<nav className="bg-teal-500 py-4">
    <div className=" flex ml-10">
      <NavLink to="/" className="text-white font-bold text-xl flex items-center">
        <img src="https://www.flaticon.com/edge/redirect?url=aHR0cHM6Ly9hZG9iZS5wcmYuaG4vY2xpY2svY2FtcmVmOjEwMTFscmNLSy9jcmVhdGl2ZXJlZjoxMTAxbDkwMTc2L3B1YnJlZjpHQTEuMi45MTkzNjIwMjQuMTY5Njk1OTI0Ni9kZXN0aW5hdGlvbjpodHRwcyUzQSUyRiUyRnN0b2NrLmFkb2JlLmNvbSUyRmVzJTJGaW1hZ2VzJTJGaWQlMkY2ODIxNDk2MjQlM0ZrJTNEY2FzYSUyNTIwY29uJTI1MjBjb3Jhem9uJTI1MjBsb2dvJTI1MjBpY29ubw==&_ga=2.63010159.1559663866.1715020386-919362024.1696959246&_gl=1*svr4m7*test_ga*OTE5MzYyMDI0LjE2OTY5NTkyNDY.*test_ga_523JXC6VL7" alt="" className="w-8 h-8 mr-2" />
      </NavLink>

      <div className="flex items-center flex-grow mx-32">
        <form className="bg-white p-2 w-full rounded-lg">
          <input type="text" className="w-full" />
        </form>
      </div>
      <div className="ml-20 flex items-center justify-end">
        <ul className="flex space-x-4 justify-end mr-10">
          <li>
            <button className="text-white text-xl" onClick={() => setShowCategories(!showCategories)}>Categorías</button>
            {showCategories && (
              <div className="flex flex-col absolute bg-white text-xl mt-2 p-2 rounded-lg">
                <NavLink to="/category/1" className="text-teal-500 hover:underline">Deco</NavLink>
                <NavLink to="/category/2" className="text-teal-500 hover:underline">Espejos</NavLink>
                <NavLink to="/category/3" className="text-teal-500 hover:underline">Kit de baños</NavLink>
              </div>
            )}
          </li>
          <li><NavLink to={'/items'} className="text-white text-xl">Productos</NavLink></li>
          <li><NavLink className="text-white text-xl">Contacto</NavLink></li>
          <li>
            <NavLink to='/cart'><CartWidget /></NavLink>
          </li>
        </ul>
      </div>

    </div>
  </nav>);
}

export default Navbar;