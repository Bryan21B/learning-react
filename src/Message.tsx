function Message() {
  const name = "Bryan";
  return name ? <h1>Hello {name}</h1> : <h1>Hello world!</h1>;
}

export default Message;
