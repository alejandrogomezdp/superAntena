import "./App.css";
// import './Componentes/Componente1';
import BarraDeBusqueda from "./Componentes/Componente1";
// import Producto from './Componentes/Componente2';
import productosData from "./Db/db.js";
import menuItems from "./Componentes/Compontente3";
import DropdownMenu from "./Componentes/Compontente3";
import Menu from "./Componentes/Compontente3";

const App = () => {
  return (
    <>
      {/* <Menu /> */}
      <div>{/* <BarraDeBusqueda /> */}</div>
      <div className>
        <div className="style-0">
          <div className="style-1">
            <a
              href="https://www.ilumitec.es/marco-blanco-blanco-simon-82"
              className="style-2"
            >
              <img
                className="style-3"
                src="https://www.ilumitec.es/imagenes/medium/marco-blanco-blanco-simon-82.jpg"
                alt="Marco SIMON 82 Blanco Zócalo Blanco"
              />
            </a>
          </div>
          <div className="style-4">
            <h3 className="style-5">
              <a
                href="https://www.ilumitec.es/marco-blanco-blanco-simon-82"
                className="style-6"
              >
                Marco SIMON 82 Blanco Zócalo Blanco
              </a>
            </h3>
          </div>
          <div className="style-7">
            <div className="style-8">
              <div className="style-9">
                <div className="style-10">
                  <div className="style-11">
                    82610-30<span className="style-12">1 elemento</span>
                  </div>
                  <div className="style-13">
                    <div className="style-14">
                      <div className="style-15">
                        <img
                          src="https://www.ilumitec.es/imagenes/mini/marco-blanco-blanco-simon-82.jpg"
                          className="style-16"
                        />
                      </div>
                      <div className="style-17">
                        <span className="style-18">2.02€</span>
                        <br className="style-19" />
                        <span className="style-20">1.67€ s/iva</span>
                        <br className="style-21" />
                        <span className="style-22">
                          <span className="style-23"></span> 24 horas
                        </span>
                      </div>
                      <div className="style-24">
                        <div className="style-25">
                          <div className="style-26">
                            <input
                              type="number"
                              name="cantidad[0]"
                              maxlength="12"
                              min="1"
                              value="1"
                              title="Cantidad"
                              className="style-27"
                              control-id="ControlID-3"
                            />
                            <button
                              type="button"
                              title="Añadir a la Cesta"
                              className="style-28"
                              control-id="ControlID-4"
                            >
                              <span className="style-29"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="style-30">
                <div className="style-31">
                  <div className="style-32">
                    82620-30<span className="style-33">2 elementos</span>
                  </div>
                  <div className="style-34">
                    <div className="style-35">
                      <div className="style-36">
                        <img
                          src="https://www.ilumitec.es/imagenes/mini/marco-blanco-blanco-2-elementos-simon-82.jpg"
                          className="style-37"
                        />
                      </div>
                      <div className="style-38">
                        <span className="style-39">3.29€</span>
                        <br className="style-40" />
                        <span className="style-41">2.72€ s/iva</span>
                        <br className="style-42" />
                        <span className="style-43">
                          <span className="style-44"></span> 24 horas
                        </span>
                      </div>
                      <div className="style-45">
                        <div className="style-46">
                          <div className="style-47">
                            <input
                              type="number"
                              name="cantidad[]"
                              maxlength="12"
                              min="1"
                              value="1"
                              title="Cantidad"
                              className="style-48"
                              control-id="ControlID-5"
                            />
                            <button
                              type="button"
                              title="Añadir a la Cesta"
                              className="style-49"
                              control-id="ControlID-6"
                            >
                              <span className="style-50"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="style-51">
                <div className="style-52">
                  <div className="style-53">
                    82630-30<span className="style-54">3 elementos</span>
                  </div>
                  <div className="style-55">
                    <div className="style-56">
                      <div className="style-57">
                        <img
                          src="https://www.ilumitec.es/imagenes/mini/marco-blanco-blanco-3-elementos-simon-82.jpg"
                          className="style-58"
                        />
                      </div>
                      <div className="style-59">
                        <span className="style-60">6.16€</span>
                        <br className="style-61" />
                        <span className="style-62">5.09€ s/iva</span>
                        <br className="style-63" />
                        <span className="style-64">
                          <span className="style-65"></span> 24 horas
                        </span>
                      </div>
                      <div className="style-66">
                        <div className="style-67">
                          <div className="style-68">
                            <input
                              type="number"
                              name="cantidad[]"
                              maxlength="12"
                              min="1"
                              value="1"
                              title="Cantidad"
                              className="style-69"
                              control-id="ControlID-7"
                            />
                            <button
                              type="button"
                              title="Añadir a la Cesta"
                              className="style-70"
                              control-id="ControlID-8"
                            >
                              <span className="style-71"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="style-72">
                <div className="style-73">
                  <div className="style-74">
                    82640-30<span className="style-75">4 elementos</span>
                  </div>
                  <div className="style-76">
                    <div className="style-77">
                      <div className="style-78">
                        <img
                          src="https://www.ilumitec.es/imagenes/mini/marco-blanco-blanco-4-elementos-simon-82.jpg"
                          className="style-79"
                        />
                      </div>
                      <div className="style-80">
                        <span className="style-81">8.25€</span>
                        <br className="style-82" />
                        <span className="style-83">6.82€ s/iva</span>
                        <br className="style-84" />
                        <span className="style-85">
                          <span className="style-86"></span> 24 horas
                        </span>
                      </div>
                      <div className="style-87">
                        <div className="style-88">
                          <div className="style-89">
                            <input
                              type="number"
                              name="cantidad[]"
                              maxlength="12"
                              min="1"
                              value="1"
                              title="Cantidad"
                              className="style-90"
                            />
                            <button
                              type="button"
                              title="Añadir a la Cesta"
                              className="style-91"
                              control-id="ControlID-10"
                            >
                              <span className="style-92"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        {productosData.map((producto) => (
          <Producto
            key={producto.Id}
            img={producto.Img}
            producto={producto.Producto}
            resumen={producto.Resumen}
            precio={producto.Precio}
          />
        ))}
      </div> */}
    </>
  );
};

export default App;
