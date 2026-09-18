document.addEventListener("DOMContentLoaded", async function () {

  const headerPlaceholder =
    document.getElementById("universal-header");

  if (!headerPlaceholder) {
    return;
  }

  try {

    const response = await fetch("/components/header.html");

    if (!response.ok) {
      throw new Error(
        "Could not load universal header."
      );
    }

    const headerHTML = await response.text();

    headerPlaceholder.innerHTML = headerHTML;

  } catch (error) {

    console.error(
      "Universal header error:",
      error
    );

  }

});
