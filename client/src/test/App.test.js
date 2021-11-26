import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "../App";
import { Navbar } from "../components";
import { About, Home, EditForm, CreateForm, HallOfFame } from "../Pages";

configure({ adapter: new Adapter() });

  describe("App", () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe("El componente Navbar debe renderizar en todas las rutas.", () => {
    
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Navbar)).toHaveLength(1);
    });

    it('Debería renderizarse en la ruta "/about"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/about"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Navbar)).toHaveLength(1);
    });
  });

  it('El componente Home debe renderizar en la ruta / (Sólo en la ruta "/")', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(About)).toHaveLength(0);
  });

  it("El componente EditForm debe renderizar en la ruta /editPlayer/:id.", () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/editPlayer/:id"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(EditForm)).toHaveLength(1);
    expect(container.find(CreateForm)).toHaveLength(0);
  });

  it("El componente CreateForm debe renderizar en la ruta /createPlayer.", () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/createPlayer"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(CreateForm)).toHaveLength(1);
    expect(container.find(EditForm)).toHaveLength(0);
  });

  it("El componente HallOfFame debe renderizar en la ruta /hallOfFame.", () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/hallOfFame"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(HallOfFame)).toHaveLength(1);
  });

  it("El componente About debe renderizar en la ruta /about.", () => {
    const container = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/about"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.find(About)).toHaveLength(1);
  });
});