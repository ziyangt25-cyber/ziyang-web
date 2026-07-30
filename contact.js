document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var successMessage = document.getElementById("form-success");
  var errorMessage = document.getElementById("form-error");
  var submitButton = form.querySelector(".btn-submit");
  var accessKey =
    window.CONTACT_CONFIG && window.CONTACT_CONFIG.accessKey;

  function t(key) {
    if (typeof window.getSiteMessage === "function") {
      return window.getSiteMessage(key);
    }
    return "";
  }

  function showError(messageKey) {
    errorMessage.textContent = t(messageKey);
    errorMessage.hidden = false;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessage.hidden = true;

    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      showError("contact.form.error.notConfigured");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = t("contact.form.sending");

    var formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "Ziyang Web 新留言");
    formData.append("from_name", formData.get("name"));

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          form.hidden = true;
          errorMessage.hidden = true;
          successMessage.hidden = false;
          return;
        }
        showError("contact.form.error.sendFailed");
      })
      .catch(function () {
        showError("contact.form.error.sendFailed");
      })
      .finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = t("contact.form.submit");
      });
  });
});
