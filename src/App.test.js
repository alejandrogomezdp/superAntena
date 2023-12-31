import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

........
.container, .nested, .box {
  box-sizing: border-box;
  text-align: center;
  align-items: center;
}

.logo{
  margin: auto;
}

.nested {
  margin-right: -15px;
  margin-left: -15px;
}

.text-right {
  line-height: 16px;
}

.box {
  padding: 6px 0px;
  border: 1px solid rgb(238, 238, 238);
  margin-right: -15px;
  margin-left: -15px;
  display: inline-block;
  align-items: center;
}

.header-text {
  font-weight: 700;
  padding-bottom: 4px;
  font-size: 13px;
  width: 100%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  text-align: left;
}

.flex-container {
  display: flex;
  align-items: center;
  width: 60%;
  float: center;
  position: block;
  margin: auto;
  min-height: 1px;
  padding-left: 15px;
}

.image-container img {
  display: block;
  max-width: 100%;
  height: auto;
align-items: middle;
  box-sizing: border-box;
  border: 0px none rgb(51, 51, 51);
}

.price-big {
  font-size: 18px;
  color: rgb(255, 105, 5);
  text-align: right;
  font-weight: 700;
}

.price-small, .delivery-info {
  color: rgb(153, 153, 153);
  font-size: 11px;
}

.delivery-info {
  color: rgb(0, 128, 0);
  font-size: 10px;
  display: block;
}

.form {
  width: 33.3333%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  text-align: right;
}

.table {
  position: relative;
  display: table;
  border-collapse: separate;
}

.quantity {
  border-radius: 4px 0px 0px;
  border-bottom: 0px none rgb(85, 85, 85);
  text-align: center;
  max-height: 30px;
  width: 100%;
  outline: rgb(85, 85, 85) none 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  display: block;
  position: relative;
  z-index: 2;
  float: left;
  margin-bottom: 0px;
  height: 30px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(85, 85, 85);
  background-color: rgb(255, 255, 255);
  background-image: none;
  box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px 0px inset;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  font-family: Nunito, sans-serif;
  margin: 0px;
}

.button {
  background-color: rgb(255, 105, 5);
  border-color: rgb(255, 105, 5);
  border-radius: 0px 0px 0px 4px;
  max-height: 30px;
  width: 100%;
  display: block;
  color: rgb(255, 255, 255);
  padding: 6px 12px;
  margin-bottom: 0px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
align-items: center;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid rgb(255, 105, 5);
  font-family: Nunito, sans-serif;
  appearance: button;
  text-transform: none;
  overflow: visible;
  margin: 0px;
}

image{
  min-width: 50px;
  min-height: 50px;
}

.carrito{
  text-align: center;
  font-size: large;
  margin-top: 1em;

}

svg{
  width: 2em;
  height: 2em;
  margin-top: 0.5em;
}

.totalpedido{
  text-align: center;
  font-size: 1.5em;
  margin-top: 1em;
}

.total{
  text-align: center;
  font-size: 1.5em;
  margin-top: 1em;
  color: rgb(5, 122, 255);
}
