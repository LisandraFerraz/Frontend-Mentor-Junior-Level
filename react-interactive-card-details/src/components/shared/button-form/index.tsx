import "./styles.scss";

interface ButtonParams {
  btn_title: String;
  btn_func: () => void;
}

export default function SharedButton(params: ButtonParams) {
  return <button onClick={params.btn_func}>{params.btn_title}</button>;
}
