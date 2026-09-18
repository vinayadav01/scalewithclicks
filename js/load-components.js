document.addEventListener("DOMContentLoaded", async function () {

  /* =========================================
     UNIVERSAL HEADER
  ========================================= */

  const headerPlaceholder =
    document.getElementById("universal-header");

  if (headerPlaceholder) {

    try {

      const response =
        await fetch("/components/header.html");

      if (!response.ok) {
        throw new Error(
          "Could not load universal header."
        );
      }

      const headerHTML =
        await response.text();

      headerPlaceholder.innerHTML =
        headerHTML;


      /* =========================================
         MOBILE MENU
      ========================================= */

      const menuButton =
        document.getElementById("scwMenuBtn");

      const navigation =
        document.getElementById("scwNav");

      if (menuButton && navigation) {

        /* Open / Close menu */

        menuButton.addEventListener(
          "click",
          function (event) {

            event.stopPropagation();

            navigation.classList.toggle("active");

            menuButton.classList.toggle("active");

            const isOpen =
              navigation.classList.contains("active");

            menuButton.setAttribute(
              "aria-expanded",
              isOpen ? "true" : "false"
            );

          }
        );


        /* Close after clicking a link */

        navigation
          .querySelectorAll("a")
          .forEach(function (link) {

            link.addEventListener(
              "click",
              function () {

                navigation.classList.remove("active");

                menuButton.classList.remove("active");

                menuButton.setAttribute(
                  "aria-expanded",
                  "false"
                );

              }
            );

          });


        /* Close when clicking outside */

        document.addEventListener(
          "click",
          function (event) {

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

          }
        );

      }

    } catch (error) {

      console.error(
        "Universal header error:",
        error
      );

    }

  }


  /* =========================================
     UNIVERSAL FLOATING CONTACT
  ========================================= */

  const floatingPlaceholder =
    document.getElementById(
      "universal-floating-contact"
    );

  if (floatingPlaceholder) {

    try {

      const response =
        await fetch(
          "/components/floating-contact.html"
        );

      if (!response.ok) {
        throw new Error(
          "Could not load floating contact buttons."
        );
      }

      const floatingHTML =
        await response.text();

      floatingPlaceholder.innerHTML =
        floatingHTML;

    } catch (error) {

      console.error(
        "Universal floating contact error:",
        error
      );

    }

  }

});
