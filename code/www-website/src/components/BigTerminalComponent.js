import React, { useEffect, useState } from "react";

const BigTerminalComponent = ({ content, state }) => {
  const [arrayCountry, setArrayCountry] = useState(["en.json"]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    switch (state) {
      case 2:
        setArrayCountry(["en.json", "fr.json"]);
        setActiveTab(1);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        setActiveTab(0);
        break;
      case 7:
      case 8:
        setActiveTab(1);
        break;
      case 9:
        setActiveTab(0);
        setArrayCountry(["en.json"]);
        break;
      default:
        break;
    }
  }, [state]);

  let stateElement = null;
  let stateElementFrancais = null;
  let codeSnippet = null;
  let codeSnippetFrancais = null;
  switch (state) {
    case "null":
      break;
    case 1:
      codeSnippet = {
        HELLO: "Hello",
        BUTTON: "Click me !",
      };

      stateElement = (
        <pre>
          <code>{JSON.stringify(codeSnippet, null, 2)}</code>
        </pre>
      );
      break;
    case 2:
      codeSnippet = {
        HELLO: "Hello",
        BUTTON: "Click me !",
      };

      codeSnippetFrancais = {};

      stateElement = (
        <pre>
          <code>{JSON.stringify(codeSnippet, null, 2)}</code>
        </pre>
      );

      stateElementFrancais = (
        <pre>
          <code>{JSON.stringify(codeSnippetFrancais, null, 2)}</code>
        </pre>
      );
      break;
    case 3:
      codeSnippet = {
        HELLO: "Hello",
        BUTTON: "Click me !",
        WELCOME_TITLE: "Hello",
      };

      codeSnippetFrancais = {};

      stateElement = (
        <pre>
          <code>{JSON.stringify(codeSnippet, null, 2)}</code>
        </pre>
      );

      stateElementFrancais = (
        <pre>
          <code>{JSON.stringify(codeSnippetFrancais, null, 2)}</code>
        </pre>
      );
      break;
    case 4:
      codeSnippet = {
        HELLO: "Hello",
        BUTTON: "Click me !",
        WELCOME_TITLE: "Welcome {name} !",
      };

      codeSnippetFrancais = {};

      stateElement = (
        <pre>
          <code>{JSON.stringify(codeSnippet, null, 2)}</code>
        </pre>
      );

      stateElementFrancais = (
        <pre>
          <code>{JSON.stringify(codeSnippetFrancais, null, 2)}</code>
        </pre>
      );
      break;
    case 5:
      codeSnippet = {
        HELLO: "Hello",
        BUTTON: "Click me !",
        WELCOME_TITLE: "Welcome {name} !",
      };

      codeSnippetFrancais = {};

      stateElement = (
        <pre>
          <code>{JSON.stringify(codeSnippet, null, 2)}</code>
        </pre>
      );

      stateElementFrancais = (
        <pre>
          <code>{JSON.stringify(codeSnippetFrancais, null, 2)}</code>
        </pre>
      );
      break;
    case 6:
      codeSnippet = {
        HELLO: "Hello",
        BUTTON: "Click me !",
      };

      codeSnippetFrancais = {};

      stateElement = (
        <pre>
          <code>{JSON.stringify(codeSnippet, null, 2)}</code>
        </pre>
      );

      stateElementFrancais = (
        <pre>
          <code>{JSON.stringify(codeSnippetFrancais, null, 2)}</code>
        </pre>
      );
      break;
    case 7:
      codeSnippet = {
        HELLO: "Hello",
        BUTTON: "Click me !",
      };

      codeSnippetFrancais = {
        HELLO: null,
        BUTTON: null,
      };

      stateElement = (
        <pre>
          <code>{JSON.stringify(codeSnippet, null, 2)}</code>
        </pre>
      );

      stateElementFrancais = (
        <pre>
          <code>{JSON.stringify(codeSnippetFrancais, null, 2)}</code>
        </pre>
      );
      break;
    case 8:
      codeSnippet = {
        HELLO: "Hello",
        BUTTON: "Click me !",
      };

      codeSnippetFrancais = {
        HELLO: "Bonjour",
        BUTTON: "Cliquez moi !",
      };

      stateElement = (
        <pre>
          <code>{JSON.stringify(codeSnippet, null, 2)}</code>
        </pre>
      );

      stateElementFrancais = (
        <pre>
          <code>{JSON.stringify(codeSnippetFrancais, null, 2)}</code>
        </pre>
      );
      break;
    case 9:
      codeSnippet = {
        HELLO: "Hello",
        BUTTON: "Click me !",
      };

      stateElement = (
        <pre>
          <code>{JSON.stringify(codeSnippet, null, 2)}</code>
        </pre>
      );
      break;
    default:
      break;
  }

  return (
    <section className={"section-terminal big-terminal"}>
      <p>I18N Folder</p>
      <div className={"section-terminal-component"}>
        <div className={"section-terminal-component-top"}>
          <div className={"section-terminal-component-top-left"}>
            <img alt={"img terminal"} src={"/images/pictos/terminal.svg"} />
            <p>
              {arrayCountry.map((country, index) => {
                return (
                  <span
                    className={
                      "json-name-container " +
                      (activeTab === index ? "active" : "")
                    }
                    onClick={() => setActiveTab(index)}
                    key={index}
                  >
                    {country}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <div className={"section-terminal-component-bot"}>
          {activeTab === 0 ? (
            <p>{stateElement}</p>
          ) : (
            <p>{stateElementFrancais}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BigTerminalComponent;
