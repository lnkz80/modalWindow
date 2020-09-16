const modal = $.modal({
  title: "Hello! This is modal window",
  closable: true,
  content:
    "<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>",
  width: "400px",
  buttons: [
    {
      text: "Ok",
      style: "primary",
      size: "sm",
      handler() {
        modal.close();
      },
    },
    {
      text: "Cancel",
      style: "secondary",
      size: "sm",
      handler() {
        modal.close();
      },
    },
  ],
});
