import React from "react";

const TopContent = () => {
  return (
    <section className={"section-home-top"}>
      <div className={"section-home-top-container"}>
        <img
          alt={"logo i18n"}
          src={"/images/medias/logo-i18n.svg"}
          className={"logo"}
        />
        <h1>
          Manage your <br />
          <span>i18n folder</span>
        </h1>
        <p>
          Manage and simplify your entire i18n translation gesture smoothly.
          <br />
          Take multilingual control, save time and efficiency on your
          translation processes.
        </p>
        <div className={"section-home-top-container-buttons"}>
          <a className={"button-blue"} href="#installation">
            <img alt={"img rocket"} src={"/images/pictos/rocket.svg"} />
            Get started
          </a>

          <a
            className={"button-white"}
            target={"_blank"}
            href={"https://www.npmjs.com/package/i18n-folder?activeTab=readme"}
          >
            <img alt={"img gitlab"} src={"/images/pictos/gitlab.svg"} />
            Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopContent;
