export default class LabFrame {
  constructor(el, options) {
    const defaults = {
      src: ""
    };
    this.el = el;
    this.settings = Object.assign(defaults, options);
    this.init();
  }

  init() {
    let iframe = document.createElement("iframe");
    iframe.className = "app-example__iframe";
    iframe.onload = function() {
      iframe.style.height =
        iframe.contentWindow.document.body.scrollHeight + "px";
    }; // before setting 'src'
    iframe.src = this.settings.src;
    this.el.appendChild(iframe);
  }
}
