document.addEventListener("DOMContentLoaded", async function () {

  const headerPlaceholder =
    document.getElementById("universal-header");

  if (!headerPlaceholder) {
    return;
  }

  try {

    const response = await fetch("/components/header.html");

    if (!response.ok) {
      throw new Error("Could not load universal header.");
    }

    const headerHTML = await response.text();

    headerPlaceholder.innerHTML = headerHTML;


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuButton =
      document.getElementById("scwMenuBtn");

    const navigation =
      document.getElementById("scwNav");

    if (!menuButton || !navigation) {
      console.error("Universal header menu elements not found.");
      return;
    }


    /* Open / Close menu */

    menuButton.addEventListener("click", function (event) {

      event.stopPropagation();

      navigation.classList.toggle("active");
      menuButton.classList.toggle("active");

      const isOpen =
        navigation.classList.contains("active");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    /* Close menu after clicking a link */

    navigation
      .querySelectorAll("a")
      .forEach(function (link) {

        link.addEventListener("click", function () {

          navigation.classList.remove("active");
          menuButton.classList.remove("active");

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        });

      });


    /* Close menu when clicking outside */

    document.addEventListener("click", function (event) {

      if (
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {

        navigation.classList.remove("active");
        menuButton.classList.remove("active");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    });


  } catch (error) {

    console.error(
      "Universal header error:",
      error
    );

  }

});
