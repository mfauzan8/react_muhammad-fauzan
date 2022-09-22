import About from "./About";

const AboutTheApp = () => {
  return (
    <>
      <About />
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-8">
          <h1>About The App</h1>
          <span>In this app, You can add, delete, submit and edit item. To edit items, simply double click on it. Once you are done, press the enter key to resubmit.</span>
          <span> This app will persist your data in the browser local storage. So whether your reload, close your app or reopened it, you still have access to your to do item</span>
        </div>
      </div>
    </>
  );
};
export default AboutTheApp;
